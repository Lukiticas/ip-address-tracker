import styled from "styled-components";

const MapSection = styled.section`
  .country-map {
    min-height: calc(100vh - 15rem);
    width: 100%;

    @media screen and (max-width: 700px) {
      min-height: 100vh;
    }
  }
`;

export { MapSection };
