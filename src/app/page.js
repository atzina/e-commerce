'use client'
import styles from './page.module.css';
import AllProducts from './componets/allProducts';

export default function Home() {
  return (
    <main className={styles.main}>
      <hi>navbar</hi>

      <AllProducts />
    </main>
  );
}
