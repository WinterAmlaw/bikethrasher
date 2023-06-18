import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';

const videoUrls = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=KMC6vIzlSkc',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/shorts/1ZhxmCtGC70',
  }
]

const MyVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    <h1 style={{textAlign:'center'}}>Our Videos</h1>
    <VideoContainer>
      {videoUrls.map((video) => {
        return(
          <VideoWrapper key={video.id}>
            <ReactPlayer
              url={video.url} 
              width='50vw'
              height='50vh'
              onReady={() => setIsLoading(false)}
            />
            {isLoading && (
              <Overlay>
                <Frame></Frame>
              </Overlay>
            )}
          </VideoWrapper>
        )
      })}
    </VideoContainer>    
    </>

  );
};

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  width: 50vw;
  height: 50vh;
  animation: ${pulse} 1.5s ease-in-out infinite alternate;
`;


export default MyVideo;
