import React from "react";
import "./SampleHeader.css";

const SampleHeader = () => {
  return (
    <header id="header">
      <button id="logo">N</button>
      <ul>
        <li>
          <button className="hb">Lang</button>
        </li>
        <li>
          <button className="hb 1">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default SampleHeader;
