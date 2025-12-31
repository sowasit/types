/**
 * SoWasIt - Build your own chain
 * (c) 2026 Askelia. All rights reserved.
 * 
 * @package @sowasit/types
 * @description Smoke tests for package exports.
 */

import { describe, it, expect } from 'vitest';
import * as Types from '../index';

describe('Package Exports', () => {
  it('should export expected utility functions', () => {
    expect(Types.isAnchorBlockHashData).toBeTypeOf('function');
    expect(Types.isAnchorBlockAggregateData).toBeTypeOf('function');
  });

  it('should have Visibility enum values', () => {
    expect(Types.Visibility).toBeDefined();
    expect(Types.Visibility.PUBLIC).toBe('public');
    expect(Types.Visibility.PRIVATE).toBe('private');
  });
});
