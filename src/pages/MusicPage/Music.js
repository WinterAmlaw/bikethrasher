import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const songs = [
  {
    title: "Song 1",
    url: "https://bandcamp.com/EmbeddedPlayer/album=3927403409/size=large/bgcol=333333/linkcol=e99708/transparent=true/",
  },
  {
    title: "Song 2",
    url: "https://bandcamp.com/EmbeddedPlayer/album=1234567890/size=large/bgcol=333333/linkcol=e99708/transparent=true/",
  },
  // Add more songs as needed
];

const MusicPlayer = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [coinActivated, setCoinActivated] = useState(false);
  const iframeRef = useRef(null);


  const handleSongClick = (song) => {
    setSelectedSong(song);
    setCoinActivated(false);
  };

  const handleCoinDrop = async (event) => {
    event.preventDefault();
    setCoinActivated(true);
    setSelectedSong(songs[0]);
  };


  return (
    <Container>
      <Wrapper>
        {/* Coin slot */}
        <CoinSlot
          coinActivated={coinActivated}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleCoinDrop}
        >
          { (
            <Coin
              draggable="true"
              onDragStart={(event) => event.dataTransfer.setData("text/plain", "")}
            />
          )}
          <CoinHole />
        </CoinSlot>

        {/* Song buttons */}
        <div style={{ marginTop: "20px" }}>
          {songs.map((song) => (
            <SongButton key={song.title} onClick={() => handleSongClick(song)}>
              {song.title}
            </SongButton>
          ))}
        </div>

        {/* Music player */}
        {selectedSong && (
          <iframe

            style={{
              border: 0,
              width: "100%",
              height: "90%",
              backgroundColor: "#333",
            }}
            src={selectedSong.url}
            seamless
          >
            <a href="https://bikethrasher.bandcamp.com/album/the-cursed-ep">
              {selectedSong.title}
            </a>
          </iframe>
        )}
      </Wrapper>
    </Container>
  );
};
const Music = () => {
  return <MusicPlayer />;
};

export default Music;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://www.transparenttextures.com/patterns/checkered-pattern.png');
`;

const Wrapper = styled.div`
  max-width: 100%;
  width: 350px;
  height: 621px;
  background-color: #111111;
  box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.05),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 20px;
`;

const CoinSlot = styled.div`
  background-color: ${({ coinActivated }) =>
    coinActivated ? '#fff8dc' : '#bfa87d'};
  height: 50px;
  text-align: center;
  position: relative;
  box-shadow: ${({ coinActivated }) =>
    coinActivated
      ? '0px 0px 10px rgba(255, 255, 255, 0.8), inset 0px 0px 10px rgba(255, 255, 255, 0.5)'
      : ''};
`;

const Coin = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: -25px;
  width: 50px;
  height: 50px;
  background: linear-gradient(to bottom, #f7ff00, #ffd300);
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
`;

const CoinHole = styled.div`
  position: absolute;
  top: calc(50% - 15px);
  right: -30px;
  width: 100px;
  height: 30px;
  border: 4px solid #111;
  border-bottom: none;
  background-color: #e0e0e0;
  background-image: url('https://www.transparenttextures.com/patterns/padded-grey.png');
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const SongButton = styled.button`
  background: #f8f8f8;
  color: #111;
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
