import React from "react";

export default function MainSection({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) {
  return (
    <div className="main-section">
      <div className="image-container">
        <img className="image" src={imageUrl} alt={title} />
        <div className="content-container">
          <div className="location-container">
            <img className="location-image" src="./images/location.svg" alt="Location" />
            <h3><span className="location">{location}</span> <span className="maps-link"> View on Google Maps</span></h3>
          </div>
          <h2>{title}</h2>
          <p className="date--style">{startDate} - {endDate}</p>
          <p>{description}</p>
          <hr />
        </div>
      </div>
    </div>
  );
}
