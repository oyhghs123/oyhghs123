import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ft">
        질문이 있으신가요? 문의전화:010-1234-5678(수신자 부담)
      </div>

      <ul className="i">
        <li>
          <button>자주 묻는 질문</button>
        </li>
        <li>
          <button>고객센터</button>
        </li>
        <li>
          <button>계정</button>
        </li>
        <li>
          <button>미디어 센터</button>
        </li>
        <li>
          <button>투자정보</button>
        </li>
        <li>
          <button>입사 정보</button>
        </li>
        <li>
          <button>넷플릭스 지원 디바이사</button>
        </li>
        <li>
          <button>이용 약관</button>
        </li>
        <li>
          <button>개인정보 처리방침</button>
        </li>
        <li>
          <button>쿠키 설정</button>
        </li>
        <li>
          <button>회사정보 문의하기</button>
        </li>
        <li>
          <button>속도테스트</button>
        </li>
        <li>
          <button>법적고지</button>
        </li>
      </ul>

      <br />
      <ul>
        <li>
          <button>한국어</button>
        </li>
      </ul>

      <div>
        <p>넷플릭스 대한민국</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          quidem ratione adipisci molestias tenetur nisi esse incidunt, iure ad
          debitis voluptatum quod harum necessitatibus at possimus, quibusdam,
          sapiente fugit inventore?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
