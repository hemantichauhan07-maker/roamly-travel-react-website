
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import { destinations, packages } from "../data.js";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker">
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Find your <em>somewhere</em>
              <br /> wonderful.
            </h1>

            <p>
              Discover beautiful destinations and thoughtfully
              planned trips made just for you.
            </p>

            <div className="hero-actions">
              <Link to="/destinations" className="btn btn-lime btn-lg">
                Explore destinations
                <i className="bi bi-arrow-up-right ms-2"></i>
              </Link>

              <Link to="/about" className="hero-text-link">
                Get to know us
              </Link>
            </div>

            <div className="hero-proof">
              <strong>★ 4.9/5</strong>
              <span> Loved by 2,400+ happy travellers</span>
            </div>
          </div>

          <div className="hero-sticker">
            <i className="bi bi-sun-fill"></i>
            <span>Take the <b>scenic route</b></span>
          </div>
        </div>

        <div className="container search-container">
          <form
            className="trip-search"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/destinations";
            }}
          >
            <div className="search-field">
              <label htmlFor="destination">Where to?</label>
              <select id="destination" defaultValue="">
                <option value="">Choose a destination</option>
                {destinations.map((place) => (
                  <option key={place.id}>{place.name}</option>
                ))}
              </select>
            </div>

            <div className="search-field">
              <label htmlFor="travel-date">When?</label>
              <input id="travel-date" type="month" />
            </div>

            <div className="search-field">
              <label htmlFor="travellers">Travellers</label>
              <select id="travellers" defaultValue="2">
                <option value="1">1 traveller</option>
                <option value="2">2 travellers</option>
                <option value="3">3 travellers</option>
                <option value="4">4+ travellers</option>
              </select>
            </div>

            <button type="submit" className="btn btn-dark-green">
              Find my trip <i className="bi bi-search ms-2"></i>
            </button>
          </form>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <span>THE ART OF TRAVEL, REIMAGINED</span>
          <div><i className="bi bi-patch-check"></i> Curated stays</div>
          <div><i className="bi bi-signpost-split"></i> Local experiences</div>
          <div><i className="bi bi-heart"></i> Thoughtfully planned</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="section-row">
            <SectionHeading
              eyebrow="PLACES THAT STAY WITH YOU"
              title={<>A world of wonder, <em>one trip at a time.</em></>}
              text="Explore unforgettable destinations around the world."
            />

            <Link
              to="/destinations"
              className="btn btn-outline-dark rounded-pill"
            >
              All destinations <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>

          <div className="row g-4 mt-2">
            {destinations.slice(0, 3).map((place) => (
              <div className="col-md-6 col-lg-4" key={place.id}>
                <DestinationCard place={place} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-band">
        <div className="container row align-items-center g-5 mx-auto">
          <div className="col-lg-6">
            <img
              className="story-image"
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85"
              alt="Beautiful mountain lake"
            />
          </div>

          <div className="col-lg-6">
            <SectionHeading
              eyebrow="NOT JUST ANOTHER HOLIDAY"
              title={<>Travel with feeling. <em>Come back changed.</em></>}
              text="The best trips are about local stories, hidden cafés and unforgettable views."
            />

            <div className="story-stats">
              <div><strong>28+</strong><small>countries explored</small></div>
              <div><strong>2.4k</strong><small>happy travellers</small></div>
              <div><strong>96%</strong><small>would travel again</small></div>
            </div>

            <Link to="/about" className="btn btn-dark-green mt-4">
              Our story <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="MADE FOR YOUR MOOD"
            title={<>A little trip inspiration.</>}
            text="Choose the travel experience that feels right for you."
          />

          <div className="row g-4 mt-2">
            {packages.map((item) => (
              <div className="col-md-4" key={item.id}>
                <Link to="/packages" className="package-teaser">
                  <img src={item.image} alt={item.title} />
                  <div className="package-teaser-copy">
                    <small>{item.duration}</small>
                    <h3>{item.title}</h3>
                    <span>
                      From ${item.price.toLocaleString()}
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <div className="eyebrow">YOUR NEXT ADVENTURE IS CALLING</div>
            <h2>Let's make a little <em>magic happen.</em></h2>
            <p>Tell us what you're dreaming of. We'll help you plan it.</p>
            <Link to="/contact" className="btn btn-lime btn-lg">
              Plan your trip <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85"
            alt="Mountain lake at sunset"
          />
        </div>
      </section>
    </>
  );
}