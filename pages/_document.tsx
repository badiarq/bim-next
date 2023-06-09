import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    
    return {
      ...initialProps,
      locale: ctx?.locale || "en",
      styles: React.Children.toArray([initialProps.styles])
    };
  }



  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          {CssBaseline.flush()}
          <link rel="icon" href="./asset/img/logo-wippi.jpg" />
          <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;