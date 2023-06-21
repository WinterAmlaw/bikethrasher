import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_SHOPIFY_API_KEY;
const secretKey = process.env.REACT_APP_SHOPIFY_API_KEY;
const accessToken = process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN;

const Merch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://bikethrasher.myshopify.com/admin/api/2023-01/products.json?ids=8251375386911', {
        headers: {
          'X-Shopify-Access-Token': `${accessToken}`,
          'Content-Type': 'application/json',
          'X-Shopify-API-Key': `${apiKey}`
        }
      });
      const data = await response.json();
      setProducts(data.products);
    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Merch</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.images[0].src} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.variants[0].price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Merch;
