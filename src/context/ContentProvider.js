import React, { useState, useEffect, createContext } from 'react'
import ContentfulApi from '../services/ContentfulApi';
import { globalQuery } from '../services/globalQuery';

export const contentContext = createContext()

const ContentProvider = ({children}) => {
  const [showsData, setShowsData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  
  const data = ContentfulApi(globalQuery);
  console.log(data.aboutPageCollection?.items[0]);
  console.log(`contentful provider triggered`);

  useEffect(() => {
    setAboutData(data.aboutPageCollection?.items[0]);
    setShowsData(data.showListingsCollection?.items);

  }, [data]);
  console.log(aboutData);
  return (
    <contentContext.Provider value={{ aboutData, showsData }}>
      {children}
    </contentContext.Provider>
  )
}

export default ContentProvider