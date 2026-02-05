/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Audit-related types for tracking data origin.
 */

export type CreatedByType = 'user' | 'api_key' | 'system';

export interface CreatedBy {
	type: CreatedByType;
	id: string | null;
}
