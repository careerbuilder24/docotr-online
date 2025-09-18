import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class OrthoCare extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and Touch Icons */}
          <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg" />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />

          {/* Theme Color for Mobile Browsers */}
          <meta name="theme-color" content="#ffffff" />

          {/* Preload Key Hero Image for Performance */}
          <link rel="preload" href="/img/home/hero-bg.webp" as="image" />
        </Head>

        <body>
          {/* Main application content */}
          <Main />

          {/* Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Optional: Customize how pages are rendered (useful for adding HOCs or wrappers globally)
OrthoCare.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // Enhance the app and components if needed
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component,
    });

  // Get initial document props from Next.js
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
