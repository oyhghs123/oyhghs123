import React from "react";
import "./Sinput.css";

const Sinput = () => {
  return (
    <div className="sin">
      <p>
        5,500원이면 만날수 있는 넷플릭스, 몇 개의 중간 광고와 함께 요금도
        절약하고 넷플릭스도 즐겨보세요
      </p>
      <input type="text" placeholder="이메일을 입력하세요" />
      <button>자세히 알아보기</button>
    </div>
  );
};

export default Sinput;
