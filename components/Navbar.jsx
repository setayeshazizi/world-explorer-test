// components/Navbar.jsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path ? { color: 'var(--accent-primary)', fontWeight: 'bold' } : {};
  };

  const isActiveOrChild = (path) => {
    if (path === '/countries' && pathname.startsWith('/countries')) {
      return { color: 'var(--accent-primary)', fontWeight: 'bold' };
    }
    return isActive(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="nav-logo" onClick={() => setIsMenuOpen(false)}>
          🌍 World<span style={{ color: 'var(--accent-primary)' }}>Explorer</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              href="/" 
              className="nav-link" 
              style={isActive('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/countries" 
              className="nav-link" 
              style={isActiveOrChild('/countries')}
              onClick={() => setIsMenuOpen(false)}
            >
              Countries
            </Link>
          </li>
          <li>
            <Link 
              href="/search" 
              className="nav-link" 
              style={isActive('/search')}
              onClick={() => setIsMenuOpen(false)}
            >
              Search
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="nav-link" 
              style={isActive('/about')}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}