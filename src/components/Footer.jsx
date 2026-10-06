
import { Link } from "react-router-dom";

export default function Footer() {
  function subscribe(e) {
    e.preventDefault();
    alert("Thank you for subscribing to Roamly!");
    e.currentTarget.reset();
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 footer-top">
          <div className="col-lg-5">
            <Link className="footer-brand" to="/">
              <i className="bi bi-compass-fill me-2"></i>
              roamly<span>.</span>
            </Link>

            <p className="footer-copy">
              Thoughtful trips for curious people. Discover new places,
              meet local people and come home with wonderful memories.
            </p>

            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/destinations">Destinations</Link>
            <Link to="/packages">Our Packages</Link>
            <Link to="/guides">Local Guides</Link>
            <Link to="/gallery">Travel Gallery</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Company</h6>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="mailto:hello@roamly.example">Careers</a>
            <a href="mailto:hello@roamly.example">FAQs</a>
          </div>

          <div className="col-lg-3">
            <h6>Get Travel Notes</h6>
            <p className="newsletter-copy">
              Inspiring places and travel tips, once a month.
            </p>

            <form className="newsletter-form" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Roamly Travel Co.</span>
          <span>
            Made for the love of travel <i className="bi bi-heart-fill"></i>
          </span>
        </div>
      </div>
    </footer>
  );
}