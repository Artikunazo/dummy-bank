import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthService } from './auth.service';
import { CreditApplication, ServiceResult } from '../models';

@Injectable({ providedIn: 'root' })
export class CreditServicesService {
  private supabaseService = inject(SupabaseService);
  private authService = inject(AuthService);
  private supabase = this.supabaseService.client;

  public applications = signal<CreditApplication[]>([]);

  async loadApplications(): Promise<void> {
    const user = this.authService.currentUser();
    if (!user) return;

    const { data, error } = await this.supabase
      .from('credit_applications')
      .select('*')
      .eq('user_id', user.id);

    if (!error && data) {
      // Map to camelCase for the frontend
      const mapped = data.map(app => ({
        id: app.id,
        userId: app.user_id,
        type: app.type,
        status: app.status,
        requestedAmount: app.requested_amount,
        approvedAmount: app.approved_amount,
        termMonths: app.term_months,
        interestRate: app.interest_rate,
        monthlyPayment: app.monthly_payment,
        metadata: app.metadata,
        createdAt: app.created_at,
        updatedAt: app.updated_at
      })) as CreditApplication[];
      
      this.applications.set(mapped);
    }
  }

  async contractService(application: Omit<CreditApplication, 'id' | 'userId' | 'createdAt' | 'updatedAt' | 'status'>): Promise<ServiceResult> {
    const user = this.authService.currentUser();
    if (!user) return { success: false, error: 'User not authenticated' };

    const payload = {
      user_id: user.id,
      type: application.type,
      status: 'active', // Faking instant approval
      requested_amount: application.requestedAmount,
      approved_amount: application.approvedAmount || application.requestedAmount,
      term_months: application.termMonths,
      interest_rate: application.interestRate,
      monthly_payment: application.monthlyPayment,
      metadata: application.metadata
    };

    const { error } = await this.supabase
      .from('credit_applications')
      .insert(payload);

    if (error) {
      return { success: false, error: 'Error al contratar el servicio.' };
    }

    await this.loadApplications();
    return { success: true };
  }

  async liquidateService(applicationId: string): Promise<ServiceResult> {
    const { error } = await this.supabase
      .from('credit_applications')
      .update({ status: 'closed' })
      .eq('id', applicationId);

    if (error) {
      return { success: false, error: 'Error al liquidar el servicio.' };
    }

    await this.loadApplications();
    return { success: true };
  }
}
