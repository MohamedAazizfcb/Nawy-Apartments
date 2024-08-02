import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body style={{backgroundColor: "aliceblue", padding: 0, margin: 0, overflowX: "hidden"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
