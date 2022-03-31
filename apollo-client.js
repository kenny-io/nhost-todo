import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://segpnfheljosgpyuimuo.nhost.run/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
