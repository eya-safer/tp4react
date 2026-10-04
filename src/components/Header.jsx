import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header({ isDark, cartCount, onToggleTheme }) {
  return (
    <Navbar expand="lg" className="food-navbar">
      <Navbar.Brand href="#top" className="brand" aria-label="Miam's, accueil">
        <span className="brand-mark">m</span>
        <span>miam’s<span className="brand-dot">.</span></span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="food-navbar-links" aria-label="Ouvrir la navigation" />
      <Navbar.Collapse id="food-navbar-links">
        <Nav className="nav-links">
          <Nav.Link href="#top">Accueil</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
        </Nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
            title={isDark ? 'Mode clair' : 'Mode sombre'}
          >
            {isDark ? (
              <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 14.2A8.5 8.5 0 0 1 9.8 3.2 8.5 8.5 0 1 0 20.8 14.2Z" />
              </svg>
            )}
          </button>
          <Nav.Link className="cart-button" href="#menu" aria-label={`Panier, ${cartCount} article${cartCount === 1 ? '' : 's'}`}>
            <svg aria-hidden="true" className="cart-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 9H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span>Panier</span>
            <span className="cart-count">{cartCount}</span>
          </Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
