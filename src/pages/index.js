import Head from 'next/head';
import ProductCard from '../components/ProductCard/ProductCard';
import styles from '../styles/Home.module.css';
import PageTransition from '../components/PageTransition/PageTransition';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Our Products — My Café</title>
        <meta name="description" content="Curated selection of coffee blends, snacks & accessories. Fast delivery & reservations." />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.slice(0, 20).map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://yourdomain.com/products/${p.id}`,
              name: p.title
            }))
          })
        }} />
      </Head>

      <PageTransition />

      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.h1}>Our Products</h1>
          <p className={styles.subtitle}>Curated selection of coffee, snacks & accessories</p>
        </header>

        <section className={styles.grid} aria-label="Product listing">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const all = await res.json();
    const products = all.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      category: p.category,
      image: p.image,
      rating: p.rating?.rate || 0
    }));
    return { props: { products } };
  } catch (err) {
    return { props: { products: [] } };
  }
}
