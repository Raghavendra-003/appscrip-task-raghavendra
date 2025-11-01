import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import styles from './PageTransition.module.css';

export default function PageTransition() {
  const router = useRouter();
  useEffect(() => {
    // run animation when route changes (including initial mount)
    const tl = gsap.timeline();
    tl.to(`.${styles.overlay}`, { duration: 0.55, scaleY: 1, transformOrigin: 'bottom', ease: 'power4.inOut' })
      .to(`.${styles.text}`, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
      .to(`.${styles.overlay}`, { duration: 0.55, scaleY: 0, transformOrigin: 'top', ease: 'power4.inOut', delay: 0.45 })
      .to(`.${styles.text}`, { opacity: 0, y: -20, duration: 0.2 }, '-=0.4');
  }, [router.asPath]);

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
      </div>
    </div>
  );
}
