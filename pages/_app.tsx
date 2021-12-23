import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "../styles/global.css";

export type Props = AppProps;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: Props): ReactElement {
  return <Component {...pageProps} />;
}
