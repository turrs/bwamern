import React from "react";
import Breadcumb from "elements/Breadcrumb";
import Fade from "react-reveal/Fade";
export default function PageDetailTitle({ data, breadcumb }) {
  return (
    <section className="container spacing-sm">
      <Fade>
        <div className="row align-items-center">
          <div className="col">
            <Breadcumb data={breadcumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{data.name}</h1>
            <span className="text-gray-400">
              {data.city},{data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
