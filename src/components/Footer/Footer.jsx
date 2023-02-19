import React from "react";
import styled from "styled-components";
import logoFooter from "../../assets/logoRojo.svg";

const StyledFooter = styled.div`
  padding: 72px 36px;
  text-align: center;

  hr {
    background-color: #f5f5f5;
    border: none;
    height: 2px;
    margin: 24px 0;
    width: 100%;
  }
`;

const StyledTextFooter = styled.div`
  p {
    font-size: 16px;
    font-weight: 300;
  }
  span {
    font-weight: 500;
    color: #000000;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    line-height: 20.68px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img src={logoFooter} alt="logo el farmacéutico" />
      <hr />
      <StyledTextFooter>
        <p>
          <span>Copyright 2021 - © EDICIONES MAYO, S.A.</span> Página web
          optimizada para navegadores Google Chrome, Mozilla Firefox, Safari,
          Android Browser & WebView (v5.0+) y Microsoft Edge.
        </p>
      </StyledTextFooter>
    </StyledFooter>
  );
}
