
import { Link } from "react-router-dom";
import { guides } from "../data.js";
import { PageHero } from "./Destinations.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Guides() {
  return (
    <>
      <PageHero
        eyebrow="MEET YOUR PEOPLE"
        title={<>Local knowledge. <em>Personal stories.</em></>}
        text="Meet the passionate local guides who make every journey more meaningful."
        image="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="GOOD PEOPLE, GREAT PLACES"
            title="The faces behind the feeling"
            text="Our guides know the hidden lanes, family-run spots and stories you won't find in a guidebook."
          />

          <div className="row g-4 mt-2">
            {guides.map((guide) => (
              <div className="col-md-4" key={guide.name}>
                <article className="guide-card">
                  <div className="guide-photo">
                    <img src={guide.image} alt={guide.name} />
                    <span>
                      <i className="bi bi-patch-check-fill"></i> Local guide
                    </span>
                  </div>

                  <div className="guide-body">
                    <div className="guide-location">
                      <i className="bi bi-geo-alt"></i> {guide.location}
                    </div>

                    <h3>{guide.name}</h3>
                    <p>{guide.role}</p>

                    <div className="guide-languages">
                      <i className="bi bi-chat-dots"></i> {guide.languages}
                    </div>

                    <Link to="/contact" className="card-link">
                      Meet your guide
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-note">
        <div className="container">
          <div>
            <h2>Know a place like the back of your hand?</h2>
            <p>
              We love meeting local guides who enjoy sharing their
              corner of the world.
            </p>
          </div>

          <a
            className="btn btn-outline-light rounded-pill"
            href="mailto:guides@roamly.example"
          >
            Become a partner <i className="bi bi-arrow-up-right ms-2"></i>
          </a>
        </div>
      </section>
    </>
  );
}