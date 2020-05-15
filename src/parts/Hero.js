import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.png";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import ImageBedroom from "assets/images/icon/icon-bedroom.svg";
import ImageTraveller from "assets/images/icon/icon-traveller.svg";
import ImageService from "assets/images/icon/icon-service.svg";
import numberFormat from "utils/formatNumber";
import Button from "elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 500 }}>
            <h1 className="h2 font-weight-bold line-height-1 mb-3">
              Rasakan Kenyamanan. <br />
              Bagai <span className="text-gray-800">Raja</span> dalam Istana
            </h1>
            <p className="mb-5 font-weight-light text-gray-500 w-100">
              Kami menjanjikan keperluan penginapan lengkap cocok untuk liburan
              bersama keluarga
            </p>
            <Button
              className="btn"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              <span className="text-gray-100">Show me now</span>
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36px"
                  height="36px"
                  src={ImageTraveller}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}
                  {""}
                  <span className="text-gray-500">Travelers</span>
                </h6>
              </div>

              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36px"
                  height="36px"
                  src={ImageService}
                  alt={`${props.data.service} service `}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.service)}
                  {""}
                  <span className="text-gray-500">Service</span>
                </h6>
              </div>

              <div className="col-auto">
                <img
                  width="36px"
                  height="36px"
                  src={ImageBedroom}
                  alt={`${props.data.bedroom} bedroom `}
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.bedroom)}
                  {""}
                  <span className="text-gray-500">Bedroom</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                width="380px"
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "20px 0 0 150px", zIndex: "1" }}
              />
              <img
                src={ImageHero_}
                width="390px"
                alt="Room with couches with frame"
                className="img-fluid position-absolute"
                style={{ margin: "60px -15px 0px 170px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
