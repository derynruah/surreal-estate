import React from "react";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => (
  <div className="property-card">
    <div className="detail">
      <h3>{title}</h3>
    </div>
    <div className="detail">
      <em>
        {type} - {city}
      </em>
    </div>
    <div className="detail">
      <i className="fas fa-bath" /> {bathrooms}
    </div>
    <div className="detail">
      <i className="fas fa-bed" /> {bedrooms}
    </div>
    <div className="detail">
      <i className="fas fa-pound-sign" /> {price}
    </div>
    <a href={`mailto:${email}`} className="email">
      <i className="fas fa-envelope" /> Email
    </a>
  </div>
);

export default PropertyCard;
