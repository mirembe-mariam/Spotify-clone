import React from 'react'
import "./Player.css"
import SideBar from '../SideBar/SideBar'
import Body from "../Body/Body.js"
import Footer from '../Footer/Footer'


function Player({spotify}) {
  return (
    <div className = "player">
        <div className='player__body'>
         <SideBar />
           <Body  spotify={spotify}/>
        </div>
       <Footer />
    </div>
  )
}

export default Player