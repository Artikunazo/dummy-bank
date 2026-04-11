import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';
import { InvestmentProduct, Portfolio, ServiceResult } from '../models';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  private supabaseService = inject(SupabaseService);
  private authService = inject(AuthService);
  private accountService = inject(AccountService);
  private supabase = this.supabaseService.client;

  public products = signal<InvestmentProduct[]>([]);
  public portfolio = signal<Portfolio[]>([]);

  async loadProducts(): Promise<void> {
    const { data, error } = await this.supabase
      .from('investment_products')
      .select('*')
      .eq('is_available', true);

    if (!error && data) {
      const mapped = data.map(p => ({
        id: p.id,
        name: p.name,
        ticker: p.ticker,
        category: p.category,
        riskLevel: p.risk_level,
        annualReturn: p.annual_return,
        minimumAmount: p.minimum_amount,
        currency: p.currency,
        description: p.description,
        managementFee: p.management_fee,
        isAvailable: p.is_available
      })) as InvestmentProduct[];
      
      this.products.set(mapped);
    }
  }

  async loadPortfolio(): Promise<void> {
    const user = this.authService.currentUser();
    if (!user) return;

    const { data, error } = await this.supabase
      .from('portfolios')
      .select('*, investment_products(*)')
      .eq('user_id', user.id);

    if (!error && data) {
      const mapped = data.map(p => ({
        id: p.id,
        userId: p.user_id,
        productId: p.product_id,
        shares: p.shares,
        purchasePrice: p.purchase_price,
        currentValue: p.current_value,
        purchasedAt: p.purchased_at,
        product: p.investment_products ? {
          name: p.investment_products.name,
          category: p.investment_products.category,
          annualReturn: p.investment_products.annual_return,
        } as any : undefined
      })) as Portfolio[];
      
      this.portfolio.set(mapped);
    }
  }

  async invest(productId: string, amount: number): Promise<ServiceResult> {
    const user = this.authService.currentUser();
    if (!user) return { success: false, error: 'User not authenticated' };

    // Deduct from main balance
    const deductResult = await this.accountService.deduct(amount, `Inversión`, 'investment_purchase');
    if (!deductResult.success) {
      return deductResult;
    }

    
    // Check if portfolio for this product already exists
    const { data: existing } = await this.supabase
      .from('portfolios')
      .select('*')
      .eq('user_id', user.id)
      .eq('product_id', productId)
      .single();

    if (existing) {
      const newAmount = existing.current_value + amount;
      const { error } = await this.supabase
        .from('portfolios')
        .update({ purchase_price: newAmount, current_value: newAmount })
        .eq('id', existing.id);
      
      if (error) return { success: false, error: 'Error al procesar la inversión.' };
    } else {
      const payload = {
        user_id: user.id,
        product_id: productId,
        shares: 1, // Simplified for this sim
        purchase_price: amount,
        current_value: amount
      };

      const { error } = await this.supabase
        .from('portfolios')
        .insert(payload);

      if (error) return { success: false, error: 'Error al procesar la inversión.' };
    }


    await this.loadPortfolio();
    return { success: true };
  }
}
