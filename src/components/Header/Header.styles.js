import styled from "styled-components";

const HeaderWrapper = styled.div`
  max-width: 100vw;
  height: 15rem;
  display: grid;
  place-items: center;
  position: relative;
  font-size: 0.8rem;

  @media screen and (max-width: 700px) {
    height: 19rem;
  }
`;

const HeaderImg = styled.img`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  inset: 0;
`;

const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
  z-index: 10000000;

  bottom: 100%;
  transform: translateY(100%);

  & > * {
    margin-bottom: 2rem;
  }

  & > h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.family};
    color: ${(props) =>
      props.theme.title === "dark"
        ? props.theme.colors.clr800
        : props.theme.colors.clr400};
    font-size: 2em;
    font-weight: 500;
    letter-spacing: 1px;

    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
`;

export { HeaderImg, InputSection, HeaderWrapper };
