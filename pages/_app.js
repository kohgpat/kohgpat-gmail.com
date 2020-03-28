import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../utils/apollo-client";
import "../styles.css";
import "@reach/tooltip/styles.css";

// This default export is required in a new `pages/_app.js` file.
function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(App);
