import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styled from 'styled-components';

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
  console.log(products[0].onlineStoreUrl);
  return (
    <Container>
      <h1>Merch</h1>

      <ProductList>
        {products && products.map(product => (
          <ProductCard key={product.id} href={product.onlineStoreUrl}>
            <ProductImage src={product.images[0].src} alt={product.title} />
            <ProductInfo>
              <ProductName>{product.title}</ProductName>
              <ProductDesc>{product.description}</ProductDesc>
              <ProductPrice>${product.variants[0].price.amount}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
};

export default Merch;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ProductCard = styled.a`
  display: block;
  width: calc(33.33% - 20px);
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-decoration: none;
  color: #333;

  &:hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductName = styled.h2`
  font-size: 16px;
  margin: 0 0 5px 0;
`;

const ProductDesc = styled.p``;

const ProductPrice = styled.span`
  font-weight: bold;
`;