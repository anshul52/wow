import { useEffect, useState } from 'react'
import { brand, navLinks } from '../../data/siteContent'
import '../../styles/site-header.css'

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path
        d="M1 5.5h9M6 1.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MarkIcon() {
  return (
    <svg className="site-header__mark-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 16l-9-9-9 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#section-stacked">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <div className="site-header__left">
          <a href="#section-hero" className="site-header__mark" aria-label={`${brand.name} — back to top`}>
            <MarkIcon />
            {brand.name}
          </a>
        </div>

        <nav className="site-header__nav" aria-label="Page sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__right">
          <a href="#section-packages" className="site-header__book" aria-label="Book a journey">
            {brand.bookCta}
            <ArrowIcon />
          </a>
          <button
            type="button"
            className="site-header__burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="site-mobile-menu"
        className={`site-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="site-mobile-menu__top">
          <span className="site-header__mark">{brand.name}</span>
          <button
            type="button"
            className="site-mobile-menu__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="site-mobile-menu__nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-mobile-menu__link" onClick={closeMenu}>
              <span className="site-mobile-menu__num">{link.num}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-mobile-menu__footer">
          <a href="#section-packages" className="site-mobile-menu__cta" onClick={closeMenu}>
            {brand.planCta}
            <ArrowIcon />
          </a>
          <p className="site-mobile-menu__tagline">{brand.tagline}</p>
        </div>
      </div>
    </>
  )
}
