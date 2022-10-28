import React from "react";
import Button from "../common/Button/Button";
import './mainsection1.css'
const MainSection1 = () => {
  return (
    <div className="mainsection1wrapper">
      <div className="mainheading"> rewards for paying credit card bills.</div>
      <div className="subheading"> join 9M+ members who win rewards and cashbacks everyday</div>
      <div className="buttonwrapper">
        <Button buttonText={"Download CRED"} />
      </div>
    </div>
  );
};

export default MainSection1;
