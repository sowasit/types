/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Core Block entity definitions.
 */

/**
 * Business data contained within a block
 */
export interface BlockData {
	id: number;                    // Block number in the chain (0-based)
	chain_id: string;              // Unique chain identifier
	prev_hash: string | null;      // Hash of the previous block
	created_at: Date;
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
	[key: string]: any;            // Allow custom metadata
}

/**
 * Immutable Block structure
 */
export interface Block {
	hash: string;                  // SHA256 hash of serialized blockData
	data: BlockData;
	metadata: BlockMetadata;
}
