import React,{ useState } from 'react'
import './App.css'
import logo from './assets/1.png'
import qr from './assets/3.png'
import insta from './assets/2.jpg.webp'
import linkedin from './assets/4.png'
import xx from './assets/5.png'
import yt from './assets/6.png'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="footer">
    <div className="flex">
      <div className="qr">
        <img src={logo} alt=""/>
        <img src={qr} alt=""/>
        <p>Download our Shaastra App now</p>
      </div>
      <div className="add">
        <h2>Address</h2>
        <p>IITM Students Activities Trust</p>
        <p>Shaastra,</p>
        <p>1st Floor, O/o Dean Of Students</p>
        <p>Office,</p>
        <p>IIT Madras, Guindy, Chennai,</p>
        <p>Tamil Nadu, India - 600036</p>
      </div>
      <div className="con">
        <h2>Contact Us</h2>
        <p className="email">outreact@shaastra.org</p>
        <p className="com">To lodge a complaint</p>
        <p className="com">click below,</p>
        <button className="btn1">Complaints</button>
      </div>
      <div className="cwu">
        <h2>Connect with Us</h2>
        <div className="icons">
          <img src={insta} alt=""/>
          <img src={linkedin} alt=""/>
          <img src={yt} alt=""/>
          <img src={xx} alt=""/>
        </div>
      </div>
    </div>
    <hr/>
      <div className="cr"><p>@ Developed by Shaastra WebOps</p></div>
  </div>
  )
}

export default App
