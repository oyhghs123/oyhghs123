import React from "react";

import "./Components/Gal.css";

const Gal = () => {
  return (
    <div id="gal">
      <div className="wrap">
        <img src={img} />
        <button className="chev l">{"<"}</button>
        <button className="chev r">{">"}</button>
        <div className="txts">
          <h1>트렁크</h1>
          <p>2024</p>
        </div>
      </div>
    </div>
  );
};

export default Gal;

const img =
  "https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142_1280.jpg";
