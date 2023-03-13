import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map((photo) => {
            return (
              <div className="col-4" key={photo.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={photo.urls.regular}
                >
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
