import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { id, title, price, category, image, rating } = product;
  return (
    <article className={styles.card} aria-labelledby={`title-${id}`}>
      <div className={styles.imgWrap}>
        <Image src={image} alt={`${title} - ${category}`} width={300} height={180} style={{objectFit:'contain'}} />
      </div>
      <div className={styles.body}>
        <h2 id={`title-${id}`} className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <div className={styles.meta}>
          <span className={styles.price}>${Number(price).toFixed(2)}</span>
          <span className={styles.rating} aria-label={`Rating ${rating}`}>⭐ {rating}</span>
        </div>
      </div>
    </article>
  );
}
