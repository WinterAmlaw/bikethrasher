import React, { useState } from 'react';
import { aboutQuery } from './AboutQuery';
import ContentfulApi from '../../services/ContentfulApi';
import { ABOUT } from '../../utils/constants'
import styled from 'styled-components';


function About() {
  const page = ContentfulApi(aboutQuery, ABOUT)
  const { aboutSection, img1 } = page

  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return (
    <>
      <AboutContainer>
        <TextBlobContainer>
          {aboutSection &&           
              <>
                <Title>About Us</Title>
                <Paragraph>{aboutSection}</Paragraph> 
              </>            
          }
          
        </TextBlobContainer>
        <PhotosContainer>
          <Image 
            isVisible={isLoaded}
            onLoad={handleImageLoad}
            src={img1 && img1.url} 
            alt="description" 
          />
        </PhotosContainer>        
      </AboutContainer>
    </>
  );
};

export default About;
const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const TextBlobContainer = styled.div`
  flex-basis: 45%;
  max-width: 50%;
  margin-right: 5%;
  color: white;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
    flex-basis: 80%;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #EDB935;
  text-align: center;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: center;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const PhotosContainer = styled.div`
  flex-basis: 45%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  visibility: ${props => props.isVisible ? "visible" : "hidden"};

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

