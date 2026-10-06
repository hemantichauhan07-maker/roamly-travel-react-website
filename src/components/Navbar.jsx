
import { NavLink, Link } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["Destinations", "/destinations"],
  ["Travel Packages", "/packages"],
  ["About Us", "/about"],
  ["Travel Guides", "/guides"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg site-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand brand-mark" to="/">
          <span className="brand-icon">
            <i className="bi bi-compass-fill"></i>
          </span>
          roamly<span className="brand-dot">.</span>
        </Link>

        <button
          className="navbar-toggler nav-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav mx-auto nav-links">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="btn btn-dark-green nav-cta">
            Plan my trip
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}