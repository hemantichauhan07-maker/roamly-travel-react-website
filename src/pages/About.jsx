
import { Link } from "react-router-dom";
import { PageHero } from "./Destinations.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="THE STORY BEHIND ROAMLY"
        title={<>Travel more. <em>Feel more.</em></>}
        text="We believe travel is about more than seeing new places. It is about the moments that stay with you."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container row align-items-center g-5 mx-auto">
          <div className="col-lg-6">
            <img
              className="story-image"
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
              alt="Mountain landscape"
            />
          </div>

          <div className="col-lg-6">
            <SectionHeading
              eyebrow="OUR STORY"
              title={<>A different way to <em>see the world.</em></>}
              text="Roamly was created for curious travellers who want to explore thoughtfully, discover local culture and enjoy journeys at their own pace."
            />

            <p>
              We bring together handpicked destinations, helpful travel
              guides and carefully designed packages to make planning easier.
            </p>

            <p>
              Whether you dream of a quiet island, a mountain escape or
              a cultural adventure, we want every journey to feel personal.
            </p>

            <Link to="/destinations" className="btn btn-dark-green mt-3">
              Discover destinations
              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <div><strong>28+</strong> countries explored</div>
          <div><strong>2,400+</strong> happy travellers</div>
          <div><strong>96%</strong> would travel again</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT MATTERS TO US"
            title="Travel with a little more meaning"
            text="Our approach is built around the details that make a journey special."
          />

          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <article className="value-card">
                <i className="bi bi-heart"></i>
                <h3>Thoughtful travel</h3>
                <p>Trips planned around your interests, comfort and pace.</p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="value-card">
                <i className="bi bi-globe"></i>
                <h3>Local experiences</h3>
                <p>Discover local stories, traditions and hidden places.</p>
              </article>
            </div>

            <div className="col-md-4">
              <article className="value-card">
                <i className="bi bi-compass"></i>
                <h3>Real discovery</h3>
                <p>Make room for unexpected moments and new perspectives.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}