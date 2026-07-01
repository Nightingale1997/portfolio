import React, { useState } from "react";

function FeaturedExtra({ name, image, type, link, modal, modalImage }) {
  const [isModalVisible, setModalVisible] = useState(false);

  function showModal(e) {
    if (modal) {
      e.preventDefault();
      setModalVisible(true);
    }
  }

  return (
    <div className="featured column is-one-third  py-5">
      <div className="content ">
        <span className="is-size-5 has-text-weight-semibold">{name}</span>
      </div>
      <a href={link} onClick={showModal}>
        <div className="image-scroll-container has-border-purple">
          <figure className="image image-scroll is-3by2">
            <img src={image} alt={name} />
          </figure>
        </div>
      </a>

      <div className="columns">
        <div className="column">{type}</div>
        <div className="column">Stuff</div>
      </div>

      <div
        className={`modal ${isModalVisible ? "is-active" : ""}`}
        onClick={() => setModalVisible(false)}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-1by4">
            <img src={modalImage} alt="" />
          </p>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  );
}

export default FeaturedExtra;
