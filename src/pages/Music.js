import React, { useState, useContext } from 'react';
import styled, {css, keyframes } from 'styled-components';
import { BandCampContext } from '../context/BandCampProvider';

const albums = [
  {
    title: "Album 1",
    url: "https://bandcamp.com/EmbeddedPlayer/album=3927403409/size=large/bgcol=333333/linkcol=2ebd35/artwork=large/transparent=true/",
  },
  {
    title: "Album 2",
    url: "https://bandcamp.com/EmbeddedPlayer/album=0987654321/size=large/bgcol=333333/linkcol=e99708/transparent=true/",
  },
  // Add more albums as needed
];

const MusicPlayer = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [coinActivated, setCoinActivated] = useState(false);

  const {iframeComponent} = useContext(BandCampContext)
  console.log(iframeComponent);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    setCoinActivated(false);
  };

  const handleCoinDrop = (event) => {
    event.preventDefault();
    setCoinActivated(true);
    setSelectedAlbum(albums[0]);
  };

  return (
    <>

    <Container>

      <Wrapper
        coinActivated={coinActivated}
      >
        {selectedAlbum && (
          <iframe
            style={{
              border: 0,
              width: "100%",
              height: "90%",
              backgroundColor: "#333",
            }}
            src={selectedAlbum.url}
            seamless
          >
            <a href={selectedAlbum.url}>{selectedAlbum.title}</a>
          </iframe>
        )}
      </Wrapper>
    <CoinSlot>
      <CoinHole 
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleCoinDrop} />
    </CoinSlot>
    

    </Container>
    <Coin
      draggable="true"
      onDragStart={(event) => event.dataTransfer.setData("text/plain", "")}
    />  

    </>

  );
};
const Music = () => {
  return <MusicPlayer />;
};

export default Music;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // background-color: #574830;

`;

const flicker = keyframes`
  from {
    box-shadow: inset 0px 0px 10px 4px #00D4FF, 0px 0px 20px 4px #FF007F;
  }
  
  to {
    box-shadow:
      -10px -10px 20px rgba(255, 255, 255, 0.1),
      10px 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

const Wrapper = styled.div`
  max-width: 100%;
  width: 350px;
  height: 600px;
  border-radius: 60px 60px 20px 20px;
  ${({ coinActivated }) =>
    coinActivated
      ? css`
          animation: ${flicker} 0.1s linear;
          animation-iteration-count: 2;
          box-shadow: inset 0px 0px 10px 4px #00d4ff, 0px 0px 20px 4px #ff007f;
        `
      : css`
          box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.1),
            10px 10px 20px rgba(0, 0, 0, 0.5);
        `}
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.2s ease-in-out;
`;

const CoinSlot = styled.div`
  background-color: gray;
  height: 70px;
  width: 60px;
  border-radius: 0px 20px 20px 0px;
  text-align: center;
  position: relative;
  box-shadow: ${({ coinActivated }) =>
    coinActivated
      ? '0px 0px 10px rgba(255, 255, 255, 0.8), inset 0px 0px 10px rgba(255, 255, 255, 0.5)'
      : ''};
`;

const Coin = styled.div`
  position: relative;
  // initial styles
  top: 0px;
  left: -25px;
  margin-top: 0px;
  margin-left:30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #fff 15%, #ccc 40%, #888 60%, #555 85%, #222);
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);

  /* Animation */
  animation-name: dropAndRoll;
  animation-duration: 5s;
  animation-fill-mode: forwards;


  @keyframes dropAndRoll {
    /* Drop down to bottom*/
    0%{
      top:-100%;
    }
  
    50% {
      top: -50px;
      transform: rotateZ(360deg);
    }

    55% {
      top: -65px;
      // transform: rotateZ(0deg);
    }

    60% {
      top: -50px;
      transform: rotateZ(0deg);
    }

    65% {
      top: -60px;
      transform: rotateZ(0deg);
    }

    /* Roll to right */
    95% {
      top: -50px;
      // left: calc(100% + 25px);
      transform: rotateZ(1080deg);
    }

    100% {
      top: -50px;
      // left: calc(100% + 25px);
      // left:100px;
      transform: rotateZ(1080deg) rotateY(180deg);
    }
  }
`;

const CoinHole = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 50px;
  height: 50px;
  // border: 4px solid #111;
  border-radius: 100%;
  border-bottom: none;
  background-color: black;
  // background-image: url('https://www.transparenttextures.com/patterns/padded-grey.png');
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;


