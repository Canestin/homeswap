import "./viewad.scss"
import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Pets } from "@mui/icons-material";

const Viewad = () => {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    // Simulating an API call to fetch apartment details
    // Replace this with your actual API call
    setTimeout(() => {
      const apartmentData = {
        id: 1,
        title: 'Spacious Apartment in City Center',
        description: 'This is a beautiful apartment located in the heart of the city.',
        constriant: 'no Pets',
        location: 'City Center',
        amenities: ['Swimming Pool', 'Gym', 'Parking'],
      };
      setApartment(apartmentData);
    }, 1000);
  }, []);

  return (
    <div className="Viewad">
      <Sidebar />
      <div className="adminContainer">
        <Navbar />
        <div className="apartmentDetails">
          <h1>Apartment Details</h1>
          {apartment ? (
            <div className="detailsContainer">
              <h2>{apartment.title}</h2>
              <p>{apartment.description}</p>
              <p>Constriant: {apartment.constriant}</p>
              <p>Location: {apartment.location}</p>
              <p>Amenities: {apartment.amenities.join(', ')}</p>
            </div>
          ) : (
            <p>Loading apartment details...</p>
          )}
        </div>
      </div>
    </div>
  );
};




export default Viewad;
