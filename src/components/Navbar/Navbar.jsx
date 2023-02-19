import React from "react";
import styled from "styled-components";
import imgLogout from "../../assets/logout.svg";
import title from "../../assets/titleNavbar.svg";

const StyledNavbar = styled.nav`
  background-color: #b20e11;
  height: 88px;
  display: flex;
  flex-direction: column;

  @media (min-width: 460px) {
    height: fit-content;
    border-bottom: 1px solid white;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  color: #b20e11;
  border-radius: 21px;
  border: none;
  display: flex;
  padding: 4px 10px;
  font-weight: 300;
  margin: 16px 24px 0 auto;
  width: 144px;
  font-size: 12px;

  img {
    margin-left: 6px;
    margin-top: 2px;
  }

  @media (min-width: 460px) {
    display: none;
  }
`;

const StyledTitleNavbar = styled.div`
  padding: 16px;
  margin-left: 24px;
  padding-left: 24px;

  img {
    max-width: 100%;
  }
`;
export default function Navbar() {

  return (
    <StyledNavbar >
      <StyledButton>
        <span>ESTER TERMENS |</span>
        <img src={imgLogout} atl="icon logout" />
      </StyledButton>
      <StyledTitleNavbar>
        <img src={title} />
      </StyledTitleNavbar>
    </StyledNavbar>
  );
}
