import React from 'react'
import "./Player.css"
import SideBar from '../SideBar/SideBar'
import Body from "../Body/Body.js"
import Footer from '../Footer/Footer'

function Player() {
  return (
    <div className = "player">
        <div className='player__body'>
         <SideBar />
           <Body />
        </div>
       <Footer />
    </div>
  )
}

export default Player