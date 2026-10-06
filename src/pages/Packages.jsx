
import { useState } from "react";
import { Link } from "react-router-dom";
import { packages } from "../data.js";
import { PageHero } from "./Destinations.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Packages() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "Relax", "Adventure", "Romance"];

  const filtered = packages.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <>
      <PageHero
        eyebrow="TRAVEL YOUR WAY"
        title={<>Trips with <em>meaning.</em></>}
        text="Thoughtfully planned travel packages for every kind of traveller."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="FIND YOUR TRAVEL STYLE"
            title="Choose your kind of escape"
            text="Every package includes thoughtful details and memorable experiences."
          />

          <div className="filter-pills package-filters">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={`filter-pill ${category === item ? "selected" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="row g-4 mt-2">
            {filtered.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <article className="package-card">
                  <img src={item.image} alt={item.title} />

                  <div className="package-card-body">
                    <span className="package-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p><i className="bi bi-geo-alt"></i> {item.place}</p>
                    <p><i className="bi bi-clock"></i> {item.duration}</p>

                    <h4>
                      ${item.price.toLocaleString()}
                      <small> / person</small>
                    </h4>

                    <h6>Package includes</h6>
                    <ul>
                      {item.includes.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <Link to="/contact" className="btn btn-dark-green w-100">
                      Enquire now <i className="bi bi-arrow-up-right ms-2"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}