import React from "react";

const Apropos = (props) => {
  return (
    <div className="apropos">
      <p>Je m'appelle {props.name} et je suis un développeur Web</p>
      <img src={props.image} alt="profile" />
    </div>
  );
};

export default Apropos;
