import "../styles/globals.css";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostClient, NhostReactProvider } from "@nhost/react";
const nhost = new NhostClient({
  backendUrl: "https://segpnfheljosgpyuimuo.nhost.run",
});
function MyApp({ Component, pageProps }) {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostReactProvider>
  );
}

export default MyApp;
