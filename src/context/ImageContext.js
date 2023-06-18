import React, { createContext, useState, useEffect } from 'react';

const sidebarBackgrounds = {
  '/': require('../assets/home-background.jpg'),
  '/shows': require('../assets/shows-background.jpg'),
  '/merch': require('../assets/merch-background.jpg'),
  '/videos': require('../assets/videos-background.jpg'),
  '/about': require('../assets/about-background.jpg'),
  '/contact': require('../assets/contact-background.jpg'),
};

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await Promise.all(
          Object.keys(sidebarBackgrounds).map((key) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = (() => {
                return () => resolve({ key: key, src: img.src });
              })();
              img.onerror = (error) => {
                console.error(`Error loading image at path ${key}:`, error);
                reject(error);
              };
              img.src = sidebarBackgrounds[key];
            })
          )
        );
        
        // Convert array of objects to object with keys matching `sidebarBackgrounds`
        const loadedImagesObj = images.reduce((acc, cur) => {
          acc[cur.key] = cur.src;
          return acc;
        }, {});
        
        setLoadedImages(loadedImagesObj);
        setAreImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    console.log(loadedImages);
  }, [loadedImages]);

  return (
    <ImagesContext.Provider value={{ loadedImages, areImagesLoaded }}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;


