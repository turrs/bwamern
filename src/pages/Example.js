import React, { Component } from "react";
import landingPages from "json/landingPage.json";
import InputDate from "elements/Form/InputDate";
import ItemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";
import MostPicked from "parts/MostPicked";
export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div className="col-auto">
          <div className="col-5" style={{ marginTop: 20 }}>
            <MostPicked
              refMostPicked={this.refMostPicked}
              data={landingPages.mostPicked}
            />
          </div>
        </div>
      </div>
    );
  }
}
