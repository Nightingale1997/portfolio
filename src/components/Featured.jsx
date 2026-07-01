import React, { useState } from "react";

function Featured({ name, image, type, link, scroll }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="featured column">
      <div className=" box">
        <div className="content ">
          <span className="is-size-4 has-text-weight-semibold">
            {name}
            <span className="has-text-purple is-size-5 has-text-weight-medium">
              {" "}
              - {type}
            </span>
          </span>
        </div>
        <a href={link}>
          <div
            className={`image-scroll-container ${
              isHovered ? "has-border-purple" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <figure className={`image is-3by2 ${scroll ? "image-scroll" : ""}`}>
              <img src={image} alt={name} />
            </figure>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Featured;
