import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

/**
 * Singleton wrapper around the Supabase JS client.
 *
 * Provides a single, shared `SupabaseClient` instance used by all services.
 * Do not inject this directly into components — use domain-specific services instead.
 *
 * @example
 * constructor(private sb: SupabaseService) {}
 * const { data } = await this.sb.client.from('accounts').select('*');
 */
@Injectable({ providedIn: 'root' })
export class SupabaseService {
  /** The initialized Supabase client. */
  readonly client: SupabaseClient;

  constructor() {
    this.client = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          storageKey: 'db_session',
          storage: localStorage,
          autoRefreshToken: true,
          detectSessionInUrl: false,
        },
      },
    );
  }

  /**
   * Use AuthService to get the current user reactively.
   * This getter is intentionally a no-op — async resolution lives in AuthService.
   */
  get currentUser(): User | null {
    return null; // Resolved async via AuthService.initialize()
  }
}
