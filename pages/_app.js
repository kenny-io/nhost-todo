import "../styles/globals.css";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostClient, NhostNextProvider } from "@nhost/nextjs";
const nhost = new NhostClient({
  backendUrl: "https://segpnfheljosgpyuimuo.nhost.run",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
