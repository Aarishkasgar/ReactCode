import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }
  return (
    <>
      <div>This is About Page</div>
      <button onClick={clickHandler}>Move to support page</button>
    </>
  );
};

export default About;
