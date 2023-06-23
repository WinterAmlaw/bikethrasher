import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram-icon.png';
import spotifyIcon from '../assets/spotify-icon.png';
import tictocIcon from '../assets/tictoc-icon.png';

const SocialMediaLinks = () => {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  return (
    <SocialContainer currentPath={currentPath}>
      <SocialLink href="https://www.facebook.com/bkthrshr">
        <i className=""><img src={fbIcon} alt="" /></i>
      </SocialLink>
      <SocialLink style={{scale:'1.2', marginBottom:'20px', paddingTop:'2px'}} href="https://www.tiktok.com/@bikethrasher">
        <i><img style={{scale:'.7'}} src={tictocIcon} alt="" /></i>
      </SocialLink>
      <SocialLink href="https://www.instagram.com/bikethrasher_/?hl=en">
        <i className=""><img src={instaIcon} alt="" /></i>
      </SocialLink>
      <SocialLink href="https://open.spotify.com/artist/7p5eWwXFN2ZtDaJn0yTKq3">
        <i className=""><img src={spotifyIcon} alt="" /></i>
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialMediaLinks;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: ${({currentPath}) => currentPath === '/videos' ? 'column' : 'row'};

  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 50%;
  // margin-bottom: 1rem;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  i {
    font-size: 20px;
    color: #000;
    transition: all 0.3s ease-in-out;
  }
  
  &:hover i {
    color: #fff;
  }
  
  &.facebook i {
    color: #1877f2;
  }
  
  &.twitter i {
    color: #1da1f2;
  }
  
  &.instagram i {
    color: #e1306c;
  }
`;