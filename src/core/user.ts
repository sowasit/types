/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Core User entity definition.
 */

import { CreatedBy } from './audit';

export interface User {
	id: string;
	tenant_id: string;
	email: string;
	role: 'admin' | 'user' | 'viewer';
	profile: {
		first_name?: string;
		last_name?: string;
		phone?: string;
	};
	is_active: boolean;
	email_verified_at?: Date;
	last_login?: Date;
	created_at: Date;
	created_by: CreatedBy;
	updated_at: Date;
}
