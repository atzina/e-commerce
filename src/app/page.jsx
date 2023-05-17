
import Image from 'next/image'
import styles from './page.module.css'

'use client'; // This is a client component
import styles from './page.module.css';
import AllProducts from './componets/allProducts';


export default function Home() {
  return (
    <main className={styles.main}>
      <hi>navbar</hi>

  
      <h1>Lista de todos los productos</h1>

   



      <AllProducts />
    </main>
  );

}
