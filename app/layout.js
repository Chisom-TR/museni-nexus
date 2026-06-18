import "./globals.css"
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <Link href="/" className="navbar-logo">
            Museni <span className="gradient-text">Nexus</span>
          </Link>
          <nav className="navbar-links">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        
        <main className="content">
          {children}
        </main>

        <footer className="footer">
          <p className="footer-brand">Museni <span className="gradient-text">Nexus</span></p>
          <p className="footer-tagline">Transforming data into strategic advantage.</p>
          <p className="footer-copy">© {new Date().getFullYear()} Museni Nexus. All rights reserved. | <Link href="/imprint">Legal Notice (Impressum)</Link></p>
        </footer>
      </body>
    </html>
  );
}