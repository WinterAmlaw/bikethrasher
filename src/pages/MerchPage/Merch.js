import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';

const shopifyStoreAcessToken = process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
const client = Client.buildClient({
  domain: 'bikethrasher.myshopify.com',
  storefrontAccessToken: shopifyStoreAcessToken
});
const Merch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.product.fetchAll();
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }

    };
    
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Merch</h1>

      <ul>
        {/* {products.map(product => (
          <li key={product.id}>
            <img src={product.images[0].src} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span>{product.variants[0].price}</span>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Merch;
