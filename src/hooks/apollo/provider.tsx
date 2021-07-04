import {InMemoryCache,ApolloClient } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `api:3000/graphql`,
  cache,
  ssrMode:true
});
