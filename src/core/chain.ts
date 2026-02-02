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

/**
 * Scope for filtering chains in queries
 * - TENANT: Only chains owned by the tenant
 * - PUBLIC: Only public chains from other tenants
 * - ALL: Both tenant chains and public chains
 */
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
	anchoring_mode?: 'sync' | 'async';
	metadata?: Record<string, any> | null;
	created_at: Date;
	hash: string;
}
