import React, { createContext } from 'react';

const BandCampContext = createContext();

const IFrameComponent = () => {
  return (
<iframe style={{border: '0', width: '75%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3927403409/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=none/transparent=true/" seamless><a href="https://bikethrasher.bandcamp.com/album/the-cursed-ep">The Cursed EP by bikethrasher</a></iframe>
  );
};

const BandCampProvider = ({ children }) => {
  const iframeComponent = <IFrameComponent />;
  return (
    <BandCampContext.Provider value={{iframeComponent}}>
      {children}
    </BandCampContext.Provider>
  );
};

export { BandCampContext, BandCampProvider };
