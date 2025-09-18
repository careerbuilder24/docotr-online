// Core Imports
import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Theme and Layout
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Global Styles
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Load Bootstrap only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Initialize ScrollCue plugin on route change
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  // Disable loader after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OrthoCare – Next.js Healthcare Template for Orthopaedic Doctors & Clinics</title>
        <meta name="description" content="OrthoCare - A specialized React and Next.js template tailored for orthopedic practices." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OrthoCare – Next.js Healthcare Template for Orthopaedic Doctors & Clinics" />
        <meta property="og:description" content="Free Next.js template for orthopedic doctors, clinics, medical websites – Built with Bootstrap." />
        <meta property="og:url" content="https://themixly.com/themes/orthopaedic-doctor-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/06/OrthoCare-Product-Detail-Image-1-scaled.png" />
        <meta property="og:image:secure_url" content="https://themixly.com/wp-content/uploads/2025/06/OrthoCare-Product-Detail-Image-1-scaled.png" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="OrthoCare – Next.js Healthcare Template for Orthopaedic Doctors & Clinics" />
        <meta name="twitter:description" content="Free Next.js template for orthopedic doctors, clinics, medical websites – Built with Bootstrap." />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/06/OrthoCare-Product-Detail-Image-1-scaled.png" />
      </Head>
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;
