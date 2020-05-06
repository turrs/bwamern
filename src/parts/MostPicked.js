import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
export default function MostPicked(props) {
  return (
    <Fade bottom>
      <section className="container" ref={props.refMostPicked}>
        <h5 className="mb-3">Most Picked</h5>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={"item column-6 row-1"}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card">
                    <div className="card card-featured">
                      <div className="tag text-gray-100">
                        ${item.price}
                        <span className="text-gray-200">per {item.unit}</span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="img-cover"
                        ></img>
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="streched-link d-block text-white"
                          href="{`/properties/${item._id}`}"
                        >
                          <h5>{item.name}</h5>
                        </Button>
                        <span>
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
}
