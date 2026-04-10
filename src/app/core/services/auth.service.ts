import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { UserProfile } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private supabaseService = inject(SupabaseService);
  private supabase = this.supabaseService.client;
  
  public currentUser = signal<UserProfile | null>(null);
  public isAuthenticated = signal<boolean>(false);

  /**
   * Initializes auth state. Logs in anonymously if no session exists or if it's the first visit.
   * Supabase's anonymous sign in generates a UUID for us.
   */
  async initialize(): Promise<void> {
    const { data: { session } } = await this.supabase.auth.getSession();
    
    if (session?.user) {
      this.isAuthenticated.set(true);
      await this.loadProfile(session.user.id);
    } else {
      await this.signInAnonymously();
    }

    // Subscribe to auth changes
    this.supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        this.isAuthenticated.set(true);
        if (!this.currentUser()) {
          await this.loadProfile(session.user.id);
        }
      } else {
        this.isAuthenticated.set(false);
        this.currentUser.set(null);
      }
    });
  }

  private async signInAnonymously(): Promise<void> {
    const { data, error } = await this.supabase.auth.signInAnonymously();
    if (error) {
      console.error('Error signing in anonymously:', error);
      return;
    }
    
    if (data.user) {
      this.isAuthenticated.set(true);
      // Wait for backend trigger or manually create profile
      await this.createInitialProfile(data.user.id);
    }
  }

  private async createInitialProfile(userId: string): Promise<void> {
    // Generate fake data
    const firstNames = ['Mike', 'Susana', 'Elba', 'Alan', 'Aquiles', 'Alma'];
    const lastNames = ['Rosofft', 'Horia', 'Lazo', 'Brito', 'Baeza', 'Madero'];
    const fakeName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`;

    const { data, error } = await this.supabase
      .from('profiles')
      .upsert({ 
        user_id: userId, 
        full_name: fakeName, 
        avatar_url: avatarUrl 
      })
      .select()
      .single();

    if (!error && data) {
      this.currentUser.set({
        id: data.user_id, // using user_id as main id for now or data.id
        email: data.email || '',
        fullName: data.full_name,
        avatarUrl: data.avatar_url,
        createdAt: data.created_at
      } as UserProfile);
      // Also create a base account 
      await this.supabase.from('accounts').insert({ user_id: userId, balance: 25000 });
    }
  }

  private async loadProfile(userId: string): Promise<void> {
    const { data, error } = await this.supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (!error && data) {
      this.currentUser.set({
        id: data.user_id,
        email: data.email || '',
        fullName: data.full_name,
        avatarUrl: data.avatar_url,
        createdAt: data.created_at
      } as UserProfile);
    } else {
      // Profile might not exist if user was just created, create it
      await this.createInitialProfile(userId);
    }
  }

  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
    // After sign out, we can automatically trigger a new anonymous session
    await this.signInAnonymously();
  }
}
