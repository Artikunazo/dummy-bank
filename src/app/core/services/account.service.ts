import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { Account, DebitCard, ServiceResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public debitCard = signal<DebitCard | null>(null);
  public mainBalance = signal<number>(0);
  private account = signal<Account | null>(null);

  private supabaseService = inject(SupabaseService);
  private authService = inject(AuthService);
  private supabase = this.supabaseService.client;

  constructor() {}

  async load(): Promise<void> {
    const user = this.authService.currentUser();
    let balance = 15000;
    
    if (user) {
      const { data } = await this.supabase.from('accounts').select('balance, id').eq('user_id', user.id).single();
      if (data) {
        balance = data.balance;
        this.account.set({
          id: data.id,
          userId: user.id,
          balance: balance,
          currency: 'MXN',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
    }

    this.mainBalance.set(balance);

    this.debitCard.set({
      id: 'card-123',
      accountId: this.account()?.id || 'acc-123',
      lastFour: '4567',
      expiryMonth: 12,
      expiryYear: 2028,
      isActive: true,
      transferLimit: 50000,
      createdAt: new Date().toISOString(),
    });
  }

  async deposit(amount: number): Promise<ServiceResult> {
    const user = this.authService.currentUser();
    if (!user) return { success: false, error: 'Unauthenticated' };
    
    const { data: accData } = await this.supabase.from('accounts').select('balance').eq('user_id', user.id).single();
    if (accData) {
      const newBalance = accData.balance + amount;
      await this.supabase.from('accounts').update({ balance: newBalance }).eq('user_id', user.id);
      this.mainBalance.set(newBalance);
      this.account.update(a => a ? { ...a, balance: newBalance } : null);
    }
    return { success: true };
  }

  async deduct(amount: number, description: string, type: string): Promise<ServiceResult> {
    const user = this.authService.currentUser();
    if (!user) return { success: false, error: 'Unauthenticated' };

    const { data: accData } = await this.supabase.from('accounts').select('balance').eq('user_id', user.id).single();
    if (!accData || accData.balance < amount) {
      return { success: false, error: 'Fondos insuficientes' };
    }
    
    const newBalance = accData.balance - amount;
    await this.supabase.from('accounts').update({ balance: newBalance }).eq('user_id', user.id);
    this.mainBalance.set(newBalance);
    this.account.update(a => a ? { ...a, balance: newBalance } : null);
    
    return { success: true };
  }

  async updateTransferLimit(limit: number): Promise<void> {
    this.debitCard.update(c => c ? { ...c, transferLimit: limit } : null);
  }
}
