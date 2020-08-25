import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:8888/Setup_Shop/setup-shop-be/graphql";
  }
  if (
    window.location.hostname ===
    "https://wordpress-458085-1446350.cloudwaysapps.com/"
  ) {
    return "https://wordpress-458085-1446350.cloudwaysapps.com/graphql";
  }
};

export const client = new ApolloClient({
  uri: uri,
  cache: new InMemoryCache(),
});
