import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("https://localhost:3000/v1/api/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
        setAlert({ message: "" });
      })
      .catch(() =>
        setAlert({
          message: "Server error, please try again later.",
        })
      );
  }, []);

  return (
    <div className="properties-header">
      <h1>Properties</h1>
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="properties">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
