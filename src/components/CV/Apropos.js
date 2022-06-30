import React from "react";

const Apropos = (props) => {
  return (
    <div className="apropos">
      <h2>Je m'appelle {props.name} et je suis un développeur Web</h2>
      <img src={props.image} alt="profile" />
    </div>
  );
};

export default Apropos;
