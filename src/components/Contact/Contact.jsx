import React from "react";
import styled from "styled-components";

const StyledContact = styled.div`
  background-color: #f5f5f5;
  padding: 16px 24px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 50px 24px 10px 24px;
  }

  p {
    font-size: 18px;
    line-height: 20.68px;
  }
  .email {
    font-weight: 500;
    color: #b20e11;
    margin-top: 0;
  }

  .telef {
    font-weight: 700;
    margin: 36px 0;
  }
  .working-hours {
    display: flex;
    flex-direction: column;

    span:first-child {
      font-weight: 700;
    }
  }
`;

export default function Contact() {
  return (
    <StyledContact>
      <p className="email">secretaria@elfarmaceutico.es</p>
      <p className="telef">Tel. 932 090 255</p>
      <p className="working-hours">
        <span>Horario de atención telefónica:</span>
        De lunes a jueves: de 9.00 a 11.00 h y de 15.30 a 17.30 h
        <span>Viernes: de 9.00 h a 11.00 h</span>
      </p>
    </StyledContact>
  );
}
