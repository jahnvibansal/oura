import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <h1 className="header-title">myOura</h1>
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
