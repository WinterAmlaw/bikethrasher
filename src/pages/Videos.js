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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  let playerWidth = '45vw';
  if (screenWidth <= 1000) {
    playerWidth = '80vw';
  }

  return (
    <>
      <h1 style={{textAlign:'center'}}>Our Videos</h1>
      <VideoContainer>
        {videoUrls.map((video) => {
          return(
            <VideoWrapper key={video.id}>
              <ReactPlayer
                url={video.url} 
                width={playerWidth}
                height='50vh'
                style={{backgroundColor: 'black'}}
                onReady={() => setIsLoading(false)}
                config={{
                  youtube: {
                    playerVars: { modestbranding: 1 },
                    preload: true,
                    preloadMetadata: true,
                    preloadThumbnail: true,
                  },
                }}
              />
              {isLoading && (
                <Overlay>
                  <Frame>
                    <PlayButton/>
                  </Frame>
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;


// const playPulse = keyframes`
//   from {
//     transform: scale(1);
//   }

//   to {
//     transform: scale(1.05);
//   }
// `;


const PlayButton = styled.div`
  background: red;
  border-radius: 50% / 10%;
  color: #FFFFFF;
  font-size: 1em;
  height: 3em;
  margin: 20px auto;
  padding: 0;
  position: relative;
  text-align: center;
  text-indent: 0.1em;
  transition: all 150ms ease-out;
  width: 4em;

  &:hover {
    background: darkorange;
  }

  &::before { 
    background: inherit;
    border-radius: 5% / 50%;
    bottom: 9%;
    content: "";
    left: -5%;
    position: absolute;
    right: -5%;
    top: 9%;
  }

  &::after {
    border-style: solid;
    border-width: 1em 0 1em 1.732em;
    border-color: transparent transparent transparent white;
    content: ' ';
    font-size: 0.75em;
    height: 0;
    margin: -1em 0 0 -0.75em;
    top: 50%;
    position: absolute;
    width: 0;
  }
`;


// const Triangle = styled.div`
//   width: 0;
//   height: 0;
//   border-top: 16px solid transparent;
//   border-bottom: 16px solid transparent;
//   border-left: 24px solid white;
// `;

// const PlayIcon = styled(Triangle)`
//   margin-left: 14px;
// `;

// const PlayButtonAnimation = () => (
//   <PlayButton>
//   </PlayButton>
// );


export default MyVideo;

