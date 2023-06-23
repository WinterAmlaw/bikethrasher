import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import fbIcon from '../assets/facebook-icon.png';
import instaIcon from '../assets/instagram-icon.png';
import spotifyIcon from '../assets/spotify-icon.png';
import tictocIcon from '../assets/tictoc-icon.png';

const SocialMediaLinks = () => {
  const currentPath = useLocation().pathname;
  console.log(currentPath);



  return (
    <SocialContainer currentPath={currentPath} >
      {/* Set animation delay based on index */}
      <SocialLink style={{ animationDelay: '0.1s' }} href="https://www.facebook.com/bkthrshr">
        <i><img src={fbIcon} alt="" /></i>
      </SocialLink>
      <SocialLink style={{ animationDelay: '0.2s', scale:'1.2', marginBottom:'20px', paddingTop:'2px' }} href="https://www.tiktok.com/@bikethrasher">
        <i><img style={{scale:'.7'}} src={tictocIcon} alt="" /></i>
      </SocialLink>
      <SocialLink style={{ animationDelay: '0.3s' }} href="https://www.instagram.com/bikethrasher_/?hl=en">
        <i><img src={instaIcon} alt="" /></i>
      </SocialLink>
      <SocialLink style={{ animationDelay: '0.4s' }} href="https://open.spotify.com/artist/7p5eWwXFN2ZtDaJn0yTKq3">
        <i><img src={spotifyIcon} alt="" /></i>
      </SocialLink>
    </SocialContainer>
  );
};


export default SocialMediaLinks;

const expandInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const expandInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const collapseOutRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const collapseOutUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: ${({currentPath}) => currentPath === '/videos' ? 'column' : 'row'};
  animation: ${({currentPath}) =>  currentPath === '/videos' ? expandInDown :  expandInRight} 0.5s ease-in-out forwards;

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
  margin: 1rem;
  transition: all 0.3s ease-in-out;

  animation: fallAndBounce 1s ease forwards;
  
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
  
  &.instagram i {
    color: #e1306c;
  }
  
  /* Define keyframe animation */
  @keyframes fallAndBounce {
    0% {
      transform: translateY(-100%);
    }
    25% {
      transform: translateY(20%);
    }
    50% {
      transform: translateY(-10%);
    }
    75% {
      transform: translateY(5%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

