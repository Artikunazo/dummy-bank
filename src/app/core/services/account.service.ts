import { Injectable, signal } from '@angular/core';
import { Account, DebitCard, ServiceResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public debitCard = signal<DebitCard | null>(null);
  public mainBalance = signal<number>(0);
  private account = signal<Account | null>(null);

  constructor() {}

  async load(): Promise<void> {
    // Mock loading data
    this.account.set({
      id: 'acc-123',
      userId: 'user-123',
      balance: 15000,
      currency: 'MXN',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    this.mainBalance.set(15000);

    this.debitCard.set({
      id: 'card-123',
      accountId: 'acc-123',
      lastFour: '4567',
      expiryMonth: 12,
      expiryYear: 2028,
      isActive: true,
      transferLimit: 50000,
      createdAt: new Date().toISOString(),
    });
  }

  async deposit(amount: number): Promise<ServiceResult> {
    this.mainBalance.update(b => b + amount);
    if (this.account()) {
      this.account.update(a => a ? { ...a, balance: a.balance + amount } : null);
    }
    return { success: true };
  }

  async deduct(amount: number, description: string, type: string): Promise<ServiceResult> {
    if (this.mainBalance() < amount) {
      return { success: false, error: 'Fondos insuficientes' };
    }
    this.mainBalance.update(b => b - amount);
    if (this.account()) {
      this.account.update(a => a ? { ...a, balance: a.balance - amount } : null);
    }
    return { success: true };
  }

  async updateTransferLimit(limit: number): Promise<void> {
    this.debitCard.update(c => c ? { ...c, transferLimit: limit } : null);
  }
}
