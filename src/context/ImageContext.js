import React, { createContext, useState, useEffect } from 'react';
import { sidebarBackgrounds } from '../utils/constants';

export const ImagesContext = createContext();

const ImagesProvider = ({ children }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await Promise.all(
          Object.values(sidebarBackgrounds).map((path) => new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = path;
          }))
        );
        setLoadedImages(images);
        setAreImagesLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, []);

  return (
    <ImagesContext.Provider value={{ loadedImages, areImagesLoaded }}>
      {children}
    </ImagesContext.Provider>
  );
};


export default ImagesProvider;
