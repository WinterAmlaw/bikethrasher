import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links, sidebarBackgrounds } from '../utils/constants' 
import { ImagesContext } from '../context/ImageContext';
import logo from '../assets/logo.jpg'
import styled from 'styled-components'


const Sidebar = () => {
  const isSidebarOpen = true
  const location = useLocation()
  const currentPathname = location.pathname
  const currentBackground = sidebarBackgrounds[currentPathname]
  const { loadedImages } = useContext(ImagesContext)
  const [currentBackgroundPath, setCurrentBackgroundPath] = useState('')
  
  const handleBackground = async () => {
    try {
      const dynanamicBackground = await import(`../assets/${sidebarBackgrounds[currentPathname]}`);
      console.log(dynanamicBackground)
      setCurrentBackgroundPath(dynanamicBackground.default)

    } catch (error) {
      console.error(error);
    }
  };
  console.log(loadedImages);
  useEffect(() => {
    handleBackground();
  }, [currentPathname]);
  
  console.log(`current background path ${currentBackgroundPath}`);
  const sidebarBackgroundStyles = {
    backgroundImage: `url(${currentBackgroundPath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };


  return( 
    <SidebarContainer background={currentBackground}>
      <aside style={{...sidebarBackgroundStyles}} className={`${isSidebarOpen? 'sidebar show-sidebar':'sidebar'}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="bikethrasher" />
        </div>
        <ul className="links">
          {links.map(({id,text,url})=>{
            const isActive = location.pathname === url
            return (
            <li key={id}>
              <Link to={url} className={isActive ? "active" : ""}>{text}</Link>
            </li>
            )
          })}       
        </ul>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .logo {
    justify-self: center;
    height: 100px;
    width: 200px;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    animation: shake 10s ease-in-out infinite;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px) rotate(-5deg);
    }
    75% {
      transform: translateX(5px) rotate(5deg);
    }
    100% {
      transform: translateX(0);
    }
  }

  ul {
    list-style: none;
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-top: 30%;
    margin-bottom: 2rem;
    font-weight: 700;
    color:var(--color-header-link)
    
  }
  .links a {
    width: fit-content;
    margin-bottom: 1rem;
    display: block;
    text-align: left;
    text-decoration: none;
    font-size: 1.25rem;
    text-transform: capitalize;
    padding: .5rem .75rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    background: black;
  }

  .links a:hover {
    // padding: 1rem 1.5rem;
    padding-left: 2rem;
    // text-decoration: line-through !important;
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    // background-image: url('./assets/home-background.jpg'); 
    // background-size: cover;
    transition: var(--transition);
    transform: translate(-100%);
    // z-index: 1;
    box-shadow: -20px 0 20px rgba(0, 0, 0, 0.5), 20px 0 40px rgba(0, 0, 0, 0.8),
                inset -20px 0 20px rgba(0, 0, 0, 1);
  }
  @media only screen and (max-width: 1000px) {
    .sidebar {
      position: absolute;
      width: 100%;
      top: unset;
      bottom: 0;
      transform: translate(0);
    }
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .active {
    text-decoration: underline !important;
    font-weight: 1000;
  }
  // @media screen and (min-width: 992px) {
  //   .sidebar {
  //     display: none;
  //   }
  // }
`

export default Sidebar
