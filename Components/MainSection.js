import React from "react";

export default function MainSection({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className="main-section">
      <div className="image-container">
        <img className="image" src={imageUrl} alt={title} />
      </div>
      <div className="content-container">
        <div className="location-container">
          <span className="location">{location}</span>
          <a className="maps-link" href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{title}</h2>
        <p className="date--style">{startDate} - {endDate}</p>
        <p>{description}</p>
        <hr />
      </div>
    </div>
  );
}
