import { brand, footer, navLinks } from '../../data/siteContent'
import '../../styles/site-footer.css'

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
    <svg className="site-footer__mark-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function SocialIcon({ network }) {
  switch (network) {
    case 'instagram':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      )
    case 'facebook':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13v-3c0-.6.4-1 1-1z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'x':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'youtube':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 8.5c0-1.4 1.1-2.5 2.5-2.5h11c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5h-11A2.5 2.5 0 0 1 4 15.5v-7z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M11 10.5v4l4-2-4-2z" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

function ContactIcon({ type }) {
  if (type === 'email') {
    return (
      <svg className="site-footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'phone') {
    return (
      <svg className="site-footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.5 4h2.2c.6 0 1.1.4 1.2 1l.4 2.4a1.2 1.2 0 0 1-.3 1.1L8.8 9.8a12 12 0 0 0 5.4 5.4l1.3-1.2a1.2 1.2 0 0 1 1.1-.3l2.4.4c.6.1 1 .6 1 1.2v2.2a1.2 1.2 0 0 1-1.1 1.2A15.5 15.5 0 0 1 5.3 5.6 1.2 1.2 0 0 1 6.5 4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg className="site-footer__contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const currentYear = new Date().getFullYear()

export default function SiteFooter() {
  const { contact, quickLinks, legal, lede, social } = footer

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a href="#section-hero" className="site-footer__mark" aria-label={`${brand.name} — back to top`}>
              <MarkIcon />
              {brand.name}
            </a>
            <p className="site-footer__lede">{lede}</p>
            <p className="theme-kicker mt-4 text-[0.65rem] tracking-[0.28em]">{brand.tagline}</p>
            <a href="#section-packages" className="site-footer__cta">
              {brand.planCta}
              <ArrowIcon />
            </a>
          </div>

          <nav aria-label="Quick links">
            <h2 className="site-footer__heading">Quick links</h2>
            <ul className="site-footer__list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="site-footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Page sections">
            <h2 className="site-footer__heading">Explore</h2>
            <ul className="site-footer__list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="site-footer__link">
                    <span className="site-footer__link-num">{link.num}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__heading">Contact</h2>
            <address className="not-italic">
              <p className="site-footer__contact-item">
                <ContactIcon type="email" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="site-footer__contact-item">
                <ContactIcon type="phone" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </p>
              <p className="site-footer__contact-item">
                <ContactIcon type="location" />
                <span>{contact.address}</span>
              </p>
            </address>

            <div className="site-footer__social" aria-label="Social media">
              {social.map((item) => (
                <a
                  key={item.network}
                  href={item.href}
                  className="site-footer__social-link"
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon network={item.network} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {currentYear} {brand.name}. All rights reserved.
          </p>
          <ul className="site-footer__legal">
            {legal.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
