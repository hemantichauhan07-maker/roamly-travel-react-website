
import { useState } from "react";
import { destinations } from "../data.js";
import DestinationCard from "../components/DestinationCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section
      className="page-hero"
      style={{ backgroundImage: `linear-gradient(90deg, #102f2bdc, #102f2b40), url("${image}")` }}
    >
      <div className="container">
        <span className="hero-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Island", "Mountains", "Coast", "Culture"];

  const filtered = destinations.filter((place) => {
    const matchesSearch =
      `${place.name} ${place.country}`.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || place.type === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHero
        eyebrow="FIND YOUR SOMEWHERE"
        title={<>Explore <em>destinations.</em></>}
        text="From peaceful islands to lively cities, find a place that speaks to you."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="YOUR NEXT ADVENTURE"
            title="Places worth the journey"
            text="Search our handpicked destinations and discover your next holiday."
          />

          <div className="destination-toolbar">
            <input
              className="form-control"
              type="search"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="filter-pills">
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
          </div>

          <div className="row g-4 mt-2">
            {filtered.map((place) => (
              <div className="col-md-6 col-lg-4" key={place.id}>
                <DestinationCard place={place} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-message">
              No destinations found. Try another search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}