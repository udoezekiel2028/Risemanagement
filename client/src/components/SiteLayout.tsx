import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const CALL_URL = "https://risemanagementandcoaching.com/schedule-a-call/";

function RiseWordmark() {
  return (
    <Link href="/" className="brand-lockup" aria-label="Rise Management and Coaching — home">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 44 44" fill="none">
          <path d="M8 33V11h12c6.1 0 9.4 3.1 9.4 8 0 4.7-3.1 7.5-8.6 8l8.1 6.9" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.7 22h12.5M25 16.7l7.2 5.3-7.2 5.3" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34.5 8a12 12 0 0 1 4.1 8.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <span className="brand-type">
        <span className="brand-name">RISE</span>
        <span className="brand-descriptor">Management &amp; Coaching</span>
      </span>
    </Link>
  );
}

export function ActionLink({ href, children, variant = "primary", external = false }: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  external?: boolean;
}) {
  return (
    <a className={`action-link action-${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const close = () => setOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <RiseWordmark />
          <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav id="primary-navigation" className={`primary-navigation ${open ? "is-open" : ""}`} aria-label="Main navigation">
            <Link href="/" onClick={close} className={location === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            <Link href="/ashely/" onClick={close} className={location === "/ashely/" ? "nav-link active" : "nav-link"}>Writing coaching</Link>
            <Link href="/coralie/" onClick={close} className={location === "/coralie/" ? "nav-link active" : "nav-link"}>Relationship coaching</Link>
            <a className="header-cta" href={CALL_URL} target="_blank" rel="noreferrer" onClick={close}>Book a call <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <RiseWordmark />
            <p>Two coaches. Two paths to a more confident you.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Find your path</span>
            <Link href="/ashely/">Writing coaching <ArrowUpRight size={14} /></Link>
            <Link href="/coralie/">Relationship coaching <ArrowUpRight size={14} /></Link>
          </div>
          <div className="footer-links">
            <span className="footer-label">Start a conversation</span>
            <a href={CALL_URL} target="_blank" rel="noreferrer">Schedule a call <ArrowUpRight size={14} /></a>
            <a href="mailto:info@risemanagementandcoaching.com">Send us an email <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rise Management &amp; Coaching</span>
          <span>Based in London · Working with clients online</span>
        </div>
      </footer>
    </div>
  );
}
