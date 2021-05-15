import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
        if(window.screenY>100){
            handleShow(true)
        }else handleShow(false)
    })
    return()=>{
        window.removeEventListener("scroll")
    }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <img className="nav__avatar" src="https://yt3.ggpht.com/ytc/AAUvwnirWIg51aWMS1NZHuugFvb4wBmI-bg19TBKaIhypw=s900-c-k-c0x00ffffff-no-rj" alt="" />
        </div>
    )
}

export default Nav
