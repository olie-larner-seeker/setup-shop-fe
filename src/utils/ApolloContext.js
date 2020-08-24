import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `http://localhost:8888/Setup_Shop/setup-shop-be/graphql`,
  cache: new InMemoryCache(),
});
