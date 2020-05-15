import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";

import FeaturedImage from "parts/FeaturedImage";
import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Footer from "parts/Footer";
import Testimony from "parts/Testimony";
import landingPages from "json/landingPage.json";
export default class DetailsPage extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5" style={{ marginTop: 20 }}>
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>

        <Testimony data={landingPages.testimonial} />
        <Footer />
      </>
    );
  }
}
