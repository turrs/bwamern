import React, { Component } from "react";
import InputNumber from "elements/Form/InputNumber";
import BookingForm from "parts/BookingForm";
import landingPages from "json/landingPage.json";
import ItemDetails from "json/itemDetails.json";
export default class Example extends Component {
  render() {
    return (
      <div className="container">
        <BookingForm itemDetails={ItemDetails} />
      </div>
    );
  }
}
