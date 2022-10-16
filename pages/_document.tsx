// https://nextjs.org/docs/advanced-features/custom-document
// https://stackoverflow.com/questions/74062563/nextjs-viewport-is-not-full-width-on-mobile-devices#comment130815286_74062746

/* eslint-disable canonical/filename-match-exported */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/img/icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/icon/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
