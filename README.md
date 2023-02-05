# bsc-testnet-blocks

This subgraph indexes all block data on the Arbitrum One mainnet beta network.

Every block is handled by one mapping handleBlock

### Note
The contract BUSDImplementation found in the ABIs folder and subgraph.yaml file is just a dummy contract used to pass formatting checks. Each block is handled automatically regardless of the logic in this contract.

Subgraph endpoint: https://thegraph.com/explorer/subgraph/styliann-eth/bsc-testnet-blocks.




## How to deploy this as a live Subgraph on The Graph's Hosted Service

Before doing anything, run the following in your terminal:
```bash
npm install
```

Then run:
```bash
graph auth --product hosted-service
```

You'll be prompted for a Deploy key. You should enter the 'ACCESS TOKEN' displayed on your Subgraph's page on The Graph's website.

Once all necessary adjustments to the various files have been made, run the 3 commands:

```bash
npm run codegen
npm run build
npm run deployed
```

## Sample queries on this Subgraph in Javascript

[ Only tested with Node version 16.x (Gallium LTS). ]


Navigate to the 'sample-queries' folder and run the 'node index' command.
