import React from 'react'
import "./Header.css"
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <header>
        <nav> <h1> ABC Cloud </h1>
        <div className="avtar">
            <Avatar style = {{background:"blue"}}>A</Avatar>
        </div>
        </nav>
    </header>
  )
}

export default Header 

