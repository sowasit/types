/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Core ApiKey entity definition.
 */

export interface ApiKey {
	id: string;
	tenant_id: string;
	name: string;
	key_hash: string;       // SHA-256 hash of the API key
	permissions: string[];
	is_active: boolean;
	expires_at?: Date;
	last_used?: Date;
	created_at: Date;
}
