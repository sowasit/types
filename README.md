# @sowasit/types

Type definitions and API contracts for **SoWasIt - Build your own chain**.

This package provides the core TypeScript interfaces and utility functions needed to interact with the SoWasIt API and visualize blockchain data.

## Installation

```bash
npm install @sowasit/types
```

## Core Concepts

### Blockchain Models
- **Block**: The fundamental unit of the chain, containing business data and cryptographic hashes.
- **Chain**: Representation of a blockchain instance with its metadata and visibility settings.

### API Contracts
- **Auth**: Request and response interfaces for login and registration.
- **Blocks/Chains**: Contracts for creating and retrieving blockchain data.
- **API Keys**: Management of tenant API keys.

## Usage Example

```typescript
import { Block, isAnchorBlockHashData } from '@sowasit/types';

function processBlock(block: Block) {
  console.log(`Processing block #${block.data.id} from chain ${block.data.chain_id}`);
  
  // Use provided type guards
  if (isAnchorBlockHashData(block.data.content)) {
    console.log('This is an anchoring block:', block.data.content.block_hash);
  }
}
```

## Development

```bash
# Build
npm run build

# Run tests
npm test
```

## License

MIT © 2026 [Askelia](https://askelia.com)
