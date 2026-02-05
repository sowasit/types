/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Core Block entity definitions.
 */

import { CreatedBy } from './audit';

/**
 * Business data contained within a block
 */
export interface BlockData {
	id: number;                    // Block number in the chain (0-based)
	chain_id: string;              // Unique chain identifier
	prev_hash: string | null;      // Hash of the previous block
	created_at: Date;
	created_by: CreatedBy;         // Creation context (user, api_key, or system)
	content: any;                  // Business data
}

/**
 * Async anchoring information for a block
 */
export interface AsyncAnchoringMetadata {
	anchors: Array<{
		service: 'sowasit' | 'bitcoin' | 'ethereum' | string;
		chainId: string;
		status: 'pending' | 'anchored' | 'failed' | 'retrying';
		blockHash?: string;
		blockId?: number;
		anchoredAt?: string;
		attempts: number;
		lastAttempt?: string;
		lastError?: string;
		nextRetry?: string;
	}>;
}

/**
 * Metadata for block processing and state
 * Extensible with custom properties
 */
export interface BlockMetadata {
	nextState?: number;            // State after contract application
	prevState?: number;            // State before contract application
	block_type?: string;           // data | action | anchor
	token_cost?: number;           // Tokens consumed by this block
	data_size_bytes?: number;      // Serialized data size
	asyncAnchoring?: AsyncAnchoringMetadata;
	'abuse-status'?: 'signaled' | 'checked' | 'confirmed';
	[key: string]: any;            // Allow custom metadata
}

/**
 * Content report submitted by a user for a block
 */
export interface BlockReport {
	id?: string;                   // UUID
	block_hash: string;
	chain_id: string;              // Unique chain identifier
	block_id: number;              // Block number in the chain
	reporter_user_id: string;
	reason: string;
	password_confirmation: boolean;
	status?: 'pending' | 'resolved' | 'dismissed';
	moderator_id?: string;
	moderated_at?: Date;
	moderator_notes?: string;
	created_at?: Date;
	created_by?: CreatedBy;        // Creation context (user, api_key, or system)
}

/**
 * Immutable Block structure
 */
export interface Block {
	hash: string;                  // SHA256 hash of serialized blockData
	data: BlockData;
	metadata: BlockMetadata;
}
