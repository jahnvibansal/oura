import { useState } from 'react'
import './Header.css'
import logo from '../assets/logo.svg'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="Oura logo" className="logo" />
        <h1 className="header-title">myOura</h1>
      </div>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <nav className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Stats</a>
          <a href="#">Settings</a>
        </nav>
      )}
    </header>
  )
}
