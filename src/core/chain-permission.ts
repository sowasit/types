/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Chain permission definitions.
 */

import { CreatedBy } from './audit';

export type SignaturePolicy = 'forbidden' | 'optional' | 'required';

export interface ChainPermission {
	id: string;
	tenant_id: string;
	chain_id: string;
	user_id: string;
	can_read: boolean;
	can_write: boolean;
	signature_policy: SignaturePolicy;
	public_key_id?: string | null;
	created_at: Date;
	updated_at: Date;
	created_by: CreatedBy;
}
