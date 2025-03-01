import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }

  function backHandler() {
    navigate(-1);
  }
  return (
    <>
      <div>This is Support Page</div>
      <button onClick={clickHandler}>Move to labs page</button>
      <button onClick={backHandler}>Go Back</button>
    </>
  );
};

export default Support;
