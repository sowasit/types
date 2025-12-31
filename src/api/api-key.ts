/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description API Key management contracts.
 */

import { ApiKey } from '../core';

export interface CreateApiKeyRequest {
  name: string;
  permissions?: string[];
  expiresInDays?: number;
}

/**
 * Detailed API key information including the raw key (only returned once)
 */
export interface ApiKeyDetail {
  id: string;
  name: string;
  key: string;            // The raw API key (returned only at creation)
  key_preview: string;    // Obfuscated preview of the key
  permissions: string[];
  is_active: boolean;
  created_at: string;
  expires_at?: string | null;
}

export interface CreateApiKeyResponse {
  success: boolean;
  message: string;
  apiKey: ApiKeyDetail;
}

export interface ListApiKeysResponse {
  success: boolean;
  data: (ApiKey & { key_preview: string })[];
}

export interface DeleteApiKeyResponse {
  success: boolean;
  message: string;
}

export interface GetApiKeyResponse {
  success: boolean;
  data: ApiKey;
}
