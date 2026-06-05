import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <span className="navbar-logo">
            <img src="/logo_transparent.png" alt="Museni Nexus logo" />
            Museni <span className="gradient-text">Nexus</span>
          </span>
          <nav className="navbar-links">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}