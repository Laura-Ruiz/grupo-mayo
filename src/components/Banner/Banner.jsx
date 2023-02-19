import styled from "styled-components";
import useData from "../../hooks/useData";
import imgArrow from "../../assets/right-arrow.svg";
import { url } from "../../constants/urls";

const StyledBackground = styled.div`
  position: relative;
  height: 452px;
  overflow: hidden;

  > img {
    height: 452px;
    object-fit: cover;
    position: absolute;
    left: -576px;
  }

  @media (min-width: 460px) {
    height: 557px;

    > img {
      left: 0;
      height: 557px;
      width: 100%;
    }
  }
`;

const StyledImageText = styled.img`
  position: absolute;
  color: white;
  top: 90px;
  right: 25px;
  width: 313px;

  @media (min-width: 460px) {
    top: 110px;
    right: 14.5%;
    width: 415px;
  }
`;

const StyledArrow = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    > img {
      width: 34px;
      position: absolute;
      right: 30px;
      top: 250px;
    }
  }
`;

export default function Banner() {
  const { data, isLoading, isError, isSuccess } = useData(url.banner);

  return (
    <div>
      {isError && <p>Error..</p>}
      {isLoading && <p>Cargando..</p>}
      {isSuccess && (
        <StyledBackground data-aos="fade-right">
          <img src={data && `${url.imageBanner}/${data[0].url}`} />
          <div>
            <StyledImageText
              src={data && `${url.imageBanner}/${data[0].title}`}
            />
          </div>
          <StyledArrow>
            <img src={imgArrow} alt="right arrow" />
          </StyledArrow>
        </StyledBackground>
      )}
    </div>
  );
}
