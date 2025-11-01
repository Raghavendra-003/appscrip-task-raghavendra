import Head from 'next/head';
import PageTransition from '../components/PageTransition/PageTransition';

export default function About() {
  return (
    <>
      <Head>
        <title>About — My Café</title>
        <meta name="description" content="About My Café and our story." />
      </Head>
      <PageTransition />
      <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>We're passionate about coffee and community.</p>
      </main>
    </>
  );
}
