import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = () => {
  console.log(window.location.hostname);
  if (window.location.hostname === "localhost") {
    console.log(window.location.hostname);
    return "http://localhost:8888/Setup_Shop/setup-shop-be/graphql";
  }
  if (
    window.location.hostname === "https://develop.dldoq5hxs3lte.amplifyapp.com/"
  ) {
    console.log(window.location.hostname);
    return "https://wordpress-458085-1446350.cloudwaysapps.com/graphql";
  }
};

console.log(uri());

export const client = new ApolloClient({
  uri: uri(),
  cache: new InMemoryCache(),
});
