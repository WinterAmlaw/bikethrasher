import React from 'react'
// import NavBar from './NavBar'
import Sidebar from './Sidebar'
import Music from './pages/MusicPage/Music'
import Shows from './pages/ShowsPage/Shows'
import Merch from './pages/MerchPage/Merch'
import Videos from './pages/VideosPage/Videos'
import About from './pages/AboutPage/About'
import Contact from './pages/ContactPage/Contact'
import Admin from './pages/AdminPage/Admin'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const shows = [
  {
    id: 1,
    dateTime: '2022-03-15 08:30',
    event: 'Kicking ass',
    location: 'New York City'
  },
  {
    id: 2,
    dateTime: '2022-05-20 14:00',
    event: 'Absolute Mayhem',
    location: 'San Francisco'
  },
  {
    id: 3,
    dateTime: '2022-07-10 18:00',
    event: 'Fun with bikethrasher',
    location: 'London'
  }
];
const PageRouter = () => {
  const isOnAdminPage = window.location.pathname === '/admin'
  return (
    <Router>
      <div className='container'>
        <div className="sidebar">
          {/* <NavBar /> */}
          {!isOnAdminPage && <Sidebar />}
        </div>
        <main>
          <Routes>
            {/* <Route path="/" exact>
              //default page
            </Route> */}
            <Route path="/" element={<Music />} />
            <Route path="/shows" element={<Shows shows={shows}/>} />
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

export default PageRouter;