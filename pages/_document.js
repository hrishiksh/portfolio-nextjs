import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/favicon.webp" />
          <link
            rel="apple-touch-icon"
            href="/images/favicon.webp"
            sizes="70x70"
          />
        </Head>
        <body className="bg-white dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
