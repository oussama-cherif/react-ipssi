import React from "react";
import Apropos from "../components/CV/Apropos";
import Competence from "../components/CV/Competence";
import Experience from "../components/CV/Experience";
import Formation from "../components/CV/Formation";
import Hobbies from "../components/CV/Hobbies";

import Image from "../assets/placeholder-200x200.png";

const Cv = () => {
  return (
    <div className="cv">
      <h1>CV</h1>
      <Apropos name="Oussama" image={Image} />
      <Competence />
      <Experience />
      <Formation />
      <Hobbies />
    </div>
  );
};

export default Cv;
