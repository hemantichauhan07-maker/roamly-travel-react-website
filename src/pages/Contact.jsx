
import { useState } from "react";
import { PageHero } from "./Destinations.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="LET'S TALK TRAVEL"
        title={<>Your next story starts <em>with a hello.</em></>}
        text="Tell us what you've been dreaming about. We want to hear it all."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad contact-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="eyebrow">WE'RE ALL EARS</div>

              <h2 className="contact-title">
                Let's make your <em>somewhere</em> happen.
              </h2>

              <p className="body-copy">
                Have a destination in mind or just looking for inspiration?
                We are here to help you plan your next trip.
              </p>

              <div className="contact-detail">
                <span><i className="bi bi-envelope"></i></span>
                <div>
                  <small>Email us</small>
                  <a href="mailto:hello@roamly.example">
                    hello@roamly.example
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span><i className="bi bi-clock"></i></span>
                <div>
                  <small>Working hours</small>
                  <strong>Mon–Fri, 9 AM–6 PM IST</strong>
                </div>
              </div>

              <div className="contact-detail">
                <span><i className="bi bi-chat-heart"></i></span>
                <div>
                  <small>Response time</small>
                  <strong>Usually within one business day</strong>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form-card">
                <div className="form-card-heading">
                  <div>
                    <span>TRIP ENQUIRY</span>
                    <h3>Tell us a little about it.</h3>
                  </div>
                  <i className="bi bi-send"></i>
                </div>

                {sent && (
                  <div className="alert alert-success" role="status">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Thank you! Your enquiry form was submitted.
                    This demo does not send data to a server.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">
                        Your name *
                      </label>
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">
                        Email address *
                      </label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="destination">
                        Destination
                      </label>
                      <select
                        className="form-select"
                        id="destination"
                        name="destination"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>Choose destination</option>
                        <option>Bali, Indonesia</option>
                        <option>Swiss Alps</option>
                        <option>Amalfi Coast</option>
                        <option>Kyoto, Japan</option>
                        <option>Somewhere else</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="month">
                        Travel month
                      </label>
                      <input
                        className="form-control"
                        id="month"
                        type="month"
                        name="month"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="travellers">
                        Number of travellers
                      </label>
                      <select
                        className="form-select"
                        id="travellers"
                        name="travellers"
                        defaultValue="2"
                      >
                        <option value="1">1 traveller</option>
                        <option value="2">2 travellers</option>
                        <option value="3-4">3–4 travellers</option>
                        <option value="5+">5+ travellers</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="style">
                        Trip style
                      </label>
                      <select
                        className="form-select"
                        id="style"
                        name="style"
                        defaultValue="Relax"
                      >
                        <option>Relax</option>
                        <option>Adventure</option>
                        <option>Food and culture</option>
                        <option>Romance</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="message">
                        Tell us more
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Describe your ideal trip..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-dark-green btn-lg w-100"
                        type="submit"
                      >
                        Send my trip enquiry
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </button>

                      <small className="form-privacy">
                        <i className="bi bi-lock me-1"></i>
                        Demo form — no information is stored on a server.
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-placeholder">
        <div className="container">
          <div className="map-card">
            <div className="map-pin">
              <i className="bi bi-geo-alt-fill"></i>
            </div>

            <div>
              <span>WHEREVER YOU ARE</span>
              <h3>The world is our office.</h3>
              <p>
                We plan trips remotely and work with local partners around
                the globe.
              </p>
            </div>

            <div className="map-decoration">
              <i className="bi bi-globe-americas"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}