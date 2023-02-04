# bsc-testnet-blocks
Subgraph indexing BSC Testnet block data


## How to deploy this as a live Subgraph on The Graph's Hosted Service

run 'graph auth --product hosted-service' in your terminal

When prompted for the Deploy key, enter the 'ACCESS TOKEN' displayed on your Subgraph's page on The Graph's website.

Once all necessary adjustments to the various files have been made, run the 3 commands:

npm run codegen
npm run build
npm run deployed

## Sample queries in Javascript

[ Only tested with Node version 16.x (Gallium LTS). ]


Navigate to the 'sample-queries' folder and run the 'node index' command.
