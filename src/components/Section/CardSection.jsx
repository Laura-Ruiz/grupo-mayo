import React from "react";
import styled from "styled-components";
import { url } from "../../constants/urls";

const StyleCard = styled.div`
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  padding: 12px;
  margin-bottom: 24px;

  div {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

const StyledCardBody = styled.div`
  p {
    font-weight: 500;
    color: #5c5c5c;
    font-size: 14px;
  }
  .title {
    font-size: 36px;
    line-height: 36px;
    margin: 0;
    height: 135px;
  }

  .location {
    font-weight: 300;
    margin: 0;
  }

  .doctor {
    font-size: 14px;
    margin: 0;
    margin: 20px 0 0 0;
  }

  .text {
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 20.68px;
    margin-top: 36px;
  }
`;

const StyledCardImage = styled.div`
  text-align: center;

  img {
    height: auto;
    max-width: 100%;
  }
`;

export default function CardSection(props) {
  return (
    <StyleCard>
      <div>
        <StyledCardImage>
          <img src={`${url.imageSection}/${props.url}`} alt={props.url} />
        </StyledCardImage>
        <StyledCardBody>
          <p className="title">{props.title}</p>
          <p className="doctor">{props.doctor}</p>
          <p className="location">{props.location}</p>
          <p className="text">{props.text}</p>
        </StyledCardBody>
      </div>
    </StyleCard>
  );
}
