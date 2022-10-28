import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="credlogo" className='credlogo' />
        <div className='navbar-link-wrapper'>
        <div className='navbar-link'> <a href="#" id='navbarlink'> credit score check</a> </div>
        <div className='navbar-link'> <a href="#" id='navbarlink'> CRED pay</a> </div>
        </div>
    </div>
  )
}

export default Navbar