import React from 'react'
import './Header.css'
import Logo from '../../assets/Y_Combinator_logo.svg'

const Header = () => {
  return (
    <header className='Header'>
      <img src={Logo} alt='Logo' />
      <h1>Hacker News</h1>
      <div className='Header-nav'>
        <a href='/'>Home</a>
        <a href='/comments'>Comments</a>
      </div>
    </header>
  )
}

export default Header
