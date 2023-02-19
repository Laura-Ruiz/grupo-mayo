import React from "react";
import styled from "styled-components";
import useData from "../../hooks/useData";
import CardSubbanner from "./CardSubbanner";
import imageModulo2 from "../../assets/MODULO-2.svg";
import { url } from "../../constants/urls";

const StyledSubbanner = styled.div`
  background-color: #f5f5f5;
  padding: 50px 24px 0 24px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 0;
  }
`;

export default function Subbanner() {
  const { data, isError, isLoading, isSuccess } = useData(url.subbanner);

  return (
    <>
      {isError && <p>Error..</p>}
      {isLoading && <p>Cargando..</p>}
      {isSuccess && (
        <StyledSubbanner >
          {data &&
            data.map(({ id, title, period, icon }) => (
              <CardSubbanner
                key={id}
                title={title}
                period={period}
                icon={icon}
                imageSVG={id === 2 ? imageModulo2 : ""}
                className={id === (data.length) ? "lastChild" : ""}
              />
            ))}
        </StyledSubbanner>
      )}
    </>
  );
}
