import React from 'react'
import Sidebar from './components/Sidebar'
import Music from './pages/Music'
import Shows from './pages/Shows'
import Merch from './pages/Merch'
import Videos from './pages/Videos'
import About from './pages/About'
import Contact from './pages/Contact'
import ImagesProvider from './context/ImageContext'
import SocialMediaLinks from './components/SocialMediaLinks'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <SocialMediaLinks />
      <div className='container' >
        <div className="sidebar">
          <ImagesProvider>
            <Sidebar />
          </ImagesProvider>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Music />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;