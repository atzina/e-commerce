'use client'; // This is a client component
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AllProducts = () => {
  const [data, setData] = useState([]);
  console.log(data, 'data');
  // const client = useClient();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        console.log(response, 'response');
        const jsonData = await response.json();
        console.log(jsonData, 'Jsondata');
        setData(jsonData);
      } catch (error) {
        console.error('error al cargar lo productos');
      }
    };
    fetchData();
  }, []);

  return (
    // <main className={styles.main}>
    <div>
      <h1>navbar</h1>
      <h1>Productos</h1>
      {data.products?.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
        <div>
          <img src={product.thumbnail} alt={product.name}  />
        </div>
         
        
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
        </div>
      ))}
    </div>
    // </main>
  );
};

export default AllProducts;
