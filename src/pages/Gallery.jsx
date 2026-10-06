
import { useState } from "react";
import { PageHero } from "./Destinations.jsx";

const photos = [
  {
    title: "Island mornings",
    place: "Bali, Indonesia",
    category: "Nature",
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Colour by the coast",
    place: "Cinque Terre, Italy",
    category: "Culture",
    src: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Into the wild",
    place: "Swiss Alps",
    category: "Nature",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "A quieter Kyoto",
    place: "Kyoto, Japan",
    category: "Culture",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "The long way round",
    place: "Dolomites, Italy",
    category: "Adventure",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "A city of colour",
    place: "Marrakech, Morocco",
    category: "Culture",
    src: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Still waters",
    place: "Lago di Braies, Italy",
    category: "Nature",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Blue, all the way",
    place: "Mediterranean coast",
    category: "Adventure",
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All moments");
  const [selected, setSelected] = useState(null);

  const options = ["All moments", "Nature", "Culture", "Adventure"];

  const filtered = photos.filter(
    (photo) => filter === "All moments" || photo.category === filter
  );

  return (
    <>
      <PageHero
        eyebrow="POSTCARDS FROM EVERYWHERE"
        title={<>Little moments. <em>Big world energy.</em></>}
        text="A collection of places and moments that remind us why we travel."
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section-pad">
        <div className="container">
          <div className="gallery-toolbar">
            <p>Collected on the road, shared with love.</p>

            <div className="filter-pills">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`filter-pill ${
                    filter === option ? "selected" : ""
                  }`}
                  onClick={() => setFilter(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filtered.map((photo, index) => (
              <button
                type="button"
                className={`gallery-tile tile-${index % 4}`}
                key={photo.title}
                onClick={() => setSelected(photo)}
              >
                <img src={photo.src} alt={photo.title} loading="lazy" />

                <span className="gallery-overlay">
                  <small>{photo.place}</small>
                  <strong>{photo.title}</strong>
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            type="button"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <img
            src={selected.src}
            alt={selected.title}
            onClick={(e) => e.stopPropagation()}
          />

          <div>
            <strong>{selected.title}</strong>
            <span>{selected.place}</span>
          </div>
        </div>
      )}
    </>
  );
}