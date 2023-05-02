import React from "react";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-light mt-4">
      <h3 className="p-3">Q-zone</h3>
      <div className="text-center">
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
