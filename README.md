# bsc-testnet-blocks
Subgraph indexing BSC Testnet block data




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

## Sample queries in Javascript

[ Only tested with Node version 16.x (Gallium LTS). ]


Navigate to the 'sample-queries' folder and run the 'node index' command.
