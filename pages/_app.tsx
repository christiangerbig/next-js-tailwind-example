import type { AppProps } from "next/app";
import "../styles/index.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
