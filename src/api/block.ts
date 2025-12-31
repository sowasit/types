/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Block-related API contracts.
 */

import { Block } from '../core';

export interface CreateBlockRequest {
  content: any;
  block_type?: string;
}

export interface CreateBlockResponse {
  success: boolean;
  message: string;
  block: Block;
}

export interface GetBlockResponse {
  success: boolean;
  block: Block;
}

export interface ListBlocksResponse {
  success: boolean;
  blocks: Block[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
  };
}
