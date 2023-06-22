import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyles.css';
import App from './App';
import ContentProvider from './context/ContentProvider';
import { BandCampProvider } from './context/BandCampProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContentProvider>
      <BandCampProvider>
        <App />
      </BandCampProvider>
    </ContentProvider>
  </React.StrictMode>
);


