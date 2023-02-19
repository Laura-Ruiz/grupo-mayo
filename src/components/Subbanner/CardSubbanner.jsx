import React from "react";
import styled from "styled-components";
import { url } from "../../constants/urls";

const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  max-width: 280px;
  min-width: 280px;

  @media (min-width: 768px) {
    height: 408px;
  }

  p {
    color: #5c5c5c;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 19px;
    font-weight: 500;
  }

  .title {
    font-size: 18px;
    width: 222px;
    margin: 35px;
  }
  .period {
    font-size: 14px;
  }

  button {
    background-color: #909dbc;
    color: #f5f5f5;
    padding: 5px 30px;
    border-radius: 23px;
    border: 1px solid #909dbc;
    cursor: pointer;
    margin-bottom: 10px;
  }

  hr {
    border: 1px solid #c1c1c1;
    width: 228px;
    margin: 40px;

    &.lastChild {
      border: none;
      margin: 20px;
    }

    @media (min-width: 1270px) {
      transform: rotate(90deg);
      position: absolute;
      margin-top: 60px;
      top: 756px;
      margin-left: 340px;
    }

    @media (min-width: 768px) and (max-width: 1270px) {
      display: none;
    }
  }
`;

const StyledImageCard = styled.div`
  height: 90px;
`;

export default function CardSubbanner({
  icon,
  period,
  title,
  imageSVG,
  className,
}) {
  const image = `${url.imageSubbanner}/${icon}`;
  return (
    <StyleCard >
      <StyledImageCard data-aos="fade-left">
        <img src={imageSVG || image} alt={icon} />
      </StyledImageCard>
      <p className="title">{title}</p>
      <p className="period">
        Periodo lectivo<span>{period}</span>
      </p>
      <button>ACCEDER</button>
      <hr className={className} />
    </StyleCard>
  );
}
