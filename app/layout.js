import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="navbar-logo">
            <img src="/logo_transparent.png" alt="Museni Nexus logo" />
            <span className="navbar-logo-text">
              <span>Museni</span>
              <span className="gradient-text">Nexus</span>
            </span>
          </div>
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