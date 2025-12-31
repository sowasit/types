/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Core Chain entity definitions.
 */

export enum Visibility {
	PUBLIC = 'public',
	PRIVATE = 'private'
}

export enum ChainScope {
	TENANT = 'tenant',
	PUBLIC = 'public',
	ALL = 'all'
}

export enum ChainType {
	DATA = 'data',
	ANCHORING = 'anchoring'
}

/**
 * Represent a blockchain instance
 */
export interface Chain {
	id: string;
	tenant_id: string;
	name: string;
	description?: string;
	visibility: Visibility;
	type: ChainType;
	anchoring_id?: string | null;
	metadata?: Record<string, any> | null;
	created_at: Date;
	hash: string;
}
