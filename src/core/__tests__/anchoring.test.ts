/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Tests for anchoring utility guards.
 */

import { describe, it, expect } from 'vitest';
import { isAnchorBlockHashData, isAnchorBlockAggregateData } from '../anchoring';

describe('Anchoring Type Guards', () => {
  describe('isAnchorBlockHashData', () => {
    it('should return true for valid block hash data', () => {
      const data = {
        block_hash: 'abc',
        block_id: 1,
        tenant_id: 't1',
        chain_id: 'c1'
      };
      expect(isAnchorBlockHashData(data)).toBe(true);
    });

    it('should return false if block_hash is missing', () => {
      const data = {
        block_id: 1,
        tenant_id: 't1',
        chain_id: 'c1'
      };
      expect(isAnchorBlockHashData(data)).toBe(false);
    });
  });

  describe('isAnchorBlockAggregateData', () => {
    it('should return true for valid aggregate data', () => {
      const data = {
        hashes: ['a', 'b'],
        block_ids: [1, 2],
        tenant_id: 't1',
        chain_id: 'c1'
      };
      expect(isAnchorBlockAggregateData(data)).toBe(true);
    });

    it('should return false if hashes is not an array', () => {
      const data = {
        hashes: 'not-an-array',
        block_ids: [1, 2],
        tenant_id: 't1',
        chain_id: 'c1'
      };
      expect(isAnchorBlockAggregateData(data)).toBe(false);
    });
  });
});
