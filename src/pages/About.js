import React, { Component } from "react";
import Corusel from "parts/About/Corusel";
import Content from "parts/About/Content";
import Header from "parts/Header";
import Footer from "parts/Footer";
export default class About extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Corusel></Corusel>
        <Content></Content>
        <Footer />
      </>
    );
  }
}
