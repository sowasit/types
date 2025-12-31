/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Chain-related API contracts.
 */

import { Chain, Visibility, ChainType } from '../core';

export interface CreateChainRequest {
  id: string;
  name: string;
  description?: string;
  visibility?: Visibility;
  type?: ChainType;
  anchoring_id?: string;
  metadata?: Record<string, any>;
}

export interface CreateChainResponse {
  success: boolean;
  message: string;
  chain: Chain;
}

export interface GetChainResponse {
  success: boolean;
  data: Chain;
}

export interface ListChainsResponse {
  success: boolean;
  data: Chain[];
  nextUrl: string | null;
}
