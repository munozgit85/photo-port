import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index } = currentPhoto;

  return (
    <div className="Backdrop">
      <div className="Container">
        <h3 className="Title">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this
        </button>
      </div>
    </div>
  );
};

export default Modal;
