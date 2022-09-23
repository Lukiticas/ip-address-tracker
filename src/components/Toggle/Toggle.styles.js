import styled from "styled-components";

const ToggleWrapper = styled.div`
  position: fixed;
  max-width: 2rem;

  bottom: 1rem;
  right: 3rem;

  z-index: 10000000;

  .moon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 5%;

    & > img {
      max-width: 100%;
      object-fit: cover;
    }
  }
`;

export default ToggleWrapper;
