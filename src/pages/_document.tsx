import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/faviconSamurai.ico" />
        <ColorSchemeScript defaultColorScheme="auto"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
