import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { url } from "../../constants/urls";
import useData from "../../hooks/useData";
import useDebounce from "../../hooks/useDebounce";
import CardSection from "./CardSection";

const StyledSection = styled.div`
  padding: 64px 8px;
`;

const StyledSearch = styled.div`
  display: none;
  margin-bottom: 24px;

  input {
    background-color: #e1e1e1;
    border: none;
    border-radius: 21px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 4.8px 100px 4.8px 25px;

    ::placeholder {
      color: #b20e11;
    }
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const StyledCardSection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
`;
export default function Section() {
  const [searchWord, setSearchWord] = useState("");
  
  const debouncedSearchWord = useDebounce(searchWord, 500);
  
  const { data, isError, isLoading, isSuccess } = useData(
    `${url.section}?search=${debouncedSearchWord}`
  );

  function handleChange(e) {
    setSearchWord(e.target.value)
  }
 
  return (
    <>
      {isError && <p>Error..</p>}
      {isLoading && <p style={{position:"absolute"}}>Cargando..</p>}
      {isSuccess && (
        <StyledSection data-aos="fade-up">
          <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <StyledSearch>
              <input
                placeholder="Buscar"
                type="text"
                id="search"
                name="search"
                onChange={handleChange}
              />
            </StyledSearch>
            <StyledCardSection>
              {data &&
                data.map(({ id, title, text, doctor, location, url }) => (
                  <CardSection
                    key={id}
                    title={title}
                    text={text}
                    doctor={doctor}
                    location={location}
                    url={url}
                  />
                ))}
            </StyledCardSection>
          </div>
        </StyledSection>
      )}
    </>
  );
}
