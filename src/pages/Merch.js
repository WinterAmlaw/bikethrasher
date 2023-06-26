import React, { useState, useEffect } from 'react';
import Client from 'shopify-buy';
import styled, { keyframes } from 'styled-components';

const shopifyStoreAcessToken = process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
const client = Client.buildClient({
  domain: 'bikethrasher.myshopify.com',
  storefrontAccessToken: shopifyStoreAcessToken
});

const Merch = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <Container>
      <h1>Merch</h1>
    {products && 
      <ProductList isLoading={isLoading}>
        {products.map(product => (
          <ProductCard key={product.id} href={product.onlineStoreUrl}>
            <ProductImage src={product.images[0].src} alt={product.title} onLoad={() => setIsLoading(false)} />
            <ProductInfo>
              <ProductName>{product.title}</ProductName>
              <ProductDesc>{product.description}</ProductDesc>
              <ProductPrice>${product.variants[0].price.amount}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))
        }     
      </ProductList>
    } 
      {isLoading && (
        <Overlay>
          <Frame>
          </Frame>
        </Overlay>
      )}
    </Container>
  );
};

export default Merch;

const Container = styled.div`
  // max-width: 1200px;
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;   
  // justify-content: center;
`;

const ProductList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: ${({isLoading}) => isLoading ? 'none' : 'flex'};
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
  // opacity: ${({ isLoading }) => (isLoading ? 0 : 1)}; /* Add this line */


  &:hover {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 1000px){
    width: 60%;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px 5px 0 0;
`;

const ProductInfo = styled.div`
  padding: 10px;
  // opacity: ${({ isLoading }) => (isLoading ? 0 : 1)}; /* Add this line */

`;

const ProductName = styled.h2`
  font-size: 16px;
  margin: 0 0 5px 0;
`;

const ProductDesc = styled.p``;

const ProductPrice = styled.span`
  font-weight: bold;
`;

const Overlay = styled.div`
  position: relative;

  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.05);
  }
`;

const Frame = styled.div`
  border: 5px solid #ccc; /* Light grey */
  border-radius: 10px;
  background-color: black;
  width: 300px;
  height:500px;
  animation: ${pulse} 1.5s ease-in-out infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

