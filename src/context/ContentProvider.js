import React, { useState, useEffect, createContext } from 'react'
import ContentfulApi from '../services/ContentfulApi';
import { globalQuery } from '../services/globalQuery';

export const contentContext = createContext()

const ContentProvider = ({children}) => {
  const [showsData, setShowsData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [cachedImage, setCachedImage] = useState(null);

  
  const data = ContentfulApi(globalQuery);
  // console.log(data.aboutPageCollection?.items[0]);
  // console.log(`contentful provider triggered`);

  useEffect(() => {
    setAboutData(data.aboutPageCollection?.items[0]);
    setShowsData(data.showListingsCollection?.items);

  }, [data]);

  let { img1 } = data.aboutPageCollection?.items[0] ?? {};
  
  useEffect(() => {
    img1 && window.caches.open('my-cache')
      .then(cache => {
        // Check if the image is already in cache
        cache.match(img1.url)
          .then(response => {
            if (!response) {
              // Create a new image and set its source URL
              const img = new Image();
              img.src = img1.url;
              // Once the image has loaded, add it to the cache
              img.onload = () => {
                fetch(img1.url)
                  .then(res => res.blob())
                  .then(blob => {
                    cache.put(img1.url, new Response(blob));
                  });
              };
            }
          })
      });
  }, [img1]);

  useEffect(() => {
    caches.match(img1 && img1.url)
    .then(response => {
      if (response) {
        response.blob()
        .then(blob => {
          console.log(blob);
          const objectUrl = URL.createObjectURL(blob);
          !cachedImage && setCachedImage(objectUrl);
        });
      }
    });
  }, [img1]);

  console.log(aboutData);
  console.log(cachedImage);
  return (
    <contentContext.Provider value={{ aboutData, showsData, cachedImage }}>
      {children}
    </contentContext.Provider>
  )
}

export default ContentProvider