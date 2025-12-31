/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Anchoring service types and utility guards.
 */

export interface AnchoringFrequencyConfig {
	frequency: number; // Number of blocks between anchors
}

/**
 * Global anchoring configuration for a chain
 */
export interface AnchoringConfig {
	block_hash: AnchoringFrequencyConfig;
	aggregate: AnchoringFrequencyConfig;
}

/**
 * Data structure for a single block hash anchor
 */
export interface AnchorBlockHashData {
	block_hash: string;
	block_id: number;
	tenant_id: string;
	chain_id: string;
}

/**
 * Data structure for an aggregate anchor (multiple blocks)
 */
export interface AnchorBlockAggregateData {
	hashes: string[];
	block_ids: number[];
	tenant_id: string;
	chain_id: string;
}

export type AnchorBlockContent = AnchorBlockHashData | AnchorBlockAggregateData;

/**
 * Guard to check if data is single block hash anchor data
 */
export function isAnchorBlockHashData(data: any): data is AnchorBlockHashData {
	return data && typeof data === 'object' && 'block_hash' in data && 'block_id' in data;
}

/**
 * Guard to check if data is aggregate anchor data
 */
export function isAnchorBlockAggregateData(data: any): data is AnchorBlockAggregateData {
	return data && typeof data === 'object' && 'hashes' in data && 'block_ids' in data && Array.isArray(data.hashes);
}
