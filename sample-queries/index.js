import { request, gql } from 'graphql-request'

// This query returns the first 5 blocks of the first 10 minutes of 2020.
const fastQuery = gql`
  {
    blocks(first: 5, orderBy: timestamp, orderDirection: asc,
        where: {timestamp_gt: "1577836800", timestamp_lt:"1577837400"}) {
      id
      number
      timestamp
      parentHash
    }
  }
`

// Note that the id field that gets returned is the hash of the block.
const query = gql`
  {
    blocks(first: 1, skip:0, orderBy: timestamp, orderDirection: desc) {
      id
      number
      timestamp
      author
      difficulty
      gasUsed
      gasLimit
      parentHash
    }
  }
`

request('https://api.thegraph.com/subgraphs/name/styliann-eth/bsc-testnet-blocks', query).then((data) => console.log(data))