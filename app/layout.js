import "./globals.css"
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="navbar-logo">
            <img src="/logo-lockup.svg" alt="Museni Nexus" />
          </Link>
          <nav className="navbar-links">
            <a href="#">Services</a>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        
        <main className="content">
          {children}
        </main>

        <footer className="footer">
          <p className="footer-brand"><img src="/logo-lockup.svg" alt="Museni Nexus" /></p>
          <p className="footer-tagline">Transforming data into strategic advantage.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Museni Nexus. All rights reserved. | <Link href="/imprint">Legal Notice (Impressum)</Link></p>
        </footer>
      </body>
    </html>
  );
}