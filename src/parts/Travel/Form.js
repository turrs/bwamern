import React from "react";
import BookingForm from "parts/BookingForm";
import ItemDetails from "json/itemDetails.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import bgimage from "assets/images/bg-jumbotron.jpg";
export default function Form() {
  return (
    <Jumbotron
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        height: 800,
      }}
    >
      <div className="container">
        <div class="row justify-content-md-center">
          <div className="card bordered" style={{ padding: "60px 80px" }}>
            <h4 className="mb-3">Start Booking</h4>
            <h5 className="h2 text-teal mb-4">Pilih Rute Bus </h5>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}
