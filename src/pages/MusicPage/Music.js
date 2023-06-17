import React, { useState, useEffect, useRef } from 'react'
import { homeQuery } from './MusicQuery'
import Api from '../../services/ContentfulApi'
import { HOME } from '../../utils/constants'
import { aboutQuery } from '../AboutPage/AboutQuery'

function Header(props) {
  return <h1>{props.header}</h1>
}

function MusicPlayer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '100%',
          width: '350px',
          height: '621px',
        }}
      >
        <iframe
          style={{ border: 0, width: '100%', height: '100%' }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3927403409/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
          seamless
        >
          <a href="https://bikethrasher.bandcamp.com/album/the-cursed-ep">
            The Cursed EP by bikethrasher
          </a>
        </iframe>
      </div>
    </div>
  )
}

function Music() {
  // const page = Api(homeQuery, HOME)
  // const { header } = page

  return (
    <>
      {/* <Header header={header} /> */}
      <MusicPlayer />
    </>
  )
}

export default Music

