import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a target="_blank" rel="noreferrer" href={photo.src.original}>
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div>
          <a
            rel="noreferrer"
            href="https://www.pexels.com/"
            className="text-center font-size-1"
          >
            Photos from Pexels
          </a>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
