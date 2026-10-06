
import { Link } from "react-router-dom";

export default function DestinationCard({ place }) {
  function toggleSave(e) {
    const button = e.currentTarget;
    const icon = button.querySelector("i");

    button.classList.toggle("saved");
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
  }

  return (
    <article className="destination-card">
      <div className="destination-image">
        <img src={place.image} alt={place.name} loading="lazy" />

        <span className="image-tag">{place.tag}</span>

        <button
          className="save-place"
          type="button"
          aria-label={`Save ${place.name}`}
          onClick={toggleSave}
        >
          <i className="bi bi-heart"></i>
        </button>
      </div>

      <div className="destination-info">
        <div className="place-rating">
          <i className="bi bi-star-fill"></i> {place.rating}
          <span> · {place.country}</span>
        </div>

        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <div className="destination-meta">
          <span>
            <i className="bi bi-clock"></i> {place.days}
          </span>

          <strong>
            From ${place.price.toLocaleString()}
            <small> / person</small>
          </strong>
        </div>

        <Link className="card-link" to="/contact">
          Explore trip <i className="bi bi-arrow-up-right"></i>
        </Link>
      </div>
    </article>
  );
}