import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <button>N</button>
      <ul className="nf">
        <li className="btn">
          <button>한국어</button>
        </li>
        <li>
          <button>로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
