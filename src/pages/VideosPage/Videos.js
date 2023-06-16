import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';




const MyVideo = () => {
  return (
    <VideoContainer>
      <h1>Our Videos</h1>
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=KMC6vIzlSkc' // replace with your own video URL
        width='50vw'
        height='50vh'
      />
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyVideo;