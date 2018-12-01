import React from "react";
import "./modal.css";

export default function profile({ toggleModal }) {
  return (
    <div className="profile-modal">
      <h1>Hello</h1>
      <p>Daftar Pokemon</p>
      <button className="button" onClick={toggleModal}>Go Back</button>
    </div>
  );
}
