import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch';

const APIURL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'

const tokensQuery = `
  query($first: Int, $orderBy: BigInt, $orderDirection: String) {
        pools {
          id
          liquidity
          totalValueLockedUSD
            token0 {
            name
          }
          token0Price
          token1 {
            name
          }
          token1Price
          
        }
      }
`

const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: APIURL, fetch })

  })
  



export default function getPool() {
     return client
  .query({
    query: gql(tokensQuery),
    variables: {
      first: 10,
      orderBy: 'createdAtTimestamp',
      orderDirection: 'desc',
    },
  })
  .catch((err) => {
    console.log('Error fetching data: ', err)
  })
}