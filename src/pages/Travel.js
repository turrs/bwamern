import React, { Component } from "react";
import Form from "parts/Travel/Form";
import Header from "parts/Header";
import Footer from "parts/Footer";
export default class Travel extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Form />
        <Footer />
      </>
    );
  }
}
