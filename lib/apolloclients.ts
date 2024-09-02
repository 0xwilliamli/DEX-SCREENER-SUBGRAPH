import { ApolloClient, InMemoryCache } from "@apollo/client";

export const uniswapClient = new ApolloClient({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/65794dcb7fb81d416de0be7d79d211eb/deployments/id/QmZeCuoZeadgHkGwLwMeguyqUKz1WPWQYKcKyMCeQqGhsF',
    cache: new InMemoryCache(),
  });

export const pancakeswapClient = new ApolloClient({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/65794dcb7fb81d416de0be7d79d211eb/subgraphs/id/6MVdVhozA6VMov2cVSGewzA1qUB7yMBCSJk5FnGkBpWH',
    cache: new InMemoryCache(),    
});