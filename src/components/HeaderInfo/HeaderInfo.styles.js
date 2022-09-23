import styled from "styled-components";

const HeaderSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2rem;

  min-height: 7rem;
  width: clamp(7rem, 100%, 70rem);

  font-size: 0.8rem;
  font-family: ${(props) => props.theme.font.family};

  padding: 2.3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.clr400};

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 700px) {
    font-size: 0.8rem;
    grid-template-columns: 1fr;
    text-align: center;
    width: clamp(7rem, 100%, 20rem);
  }
`;

const HeaderSectionDiv = styled.div`
  height: 100%;
  position: relative;

  &:not(:last-of-type) {
    &:after {
      content: "";
      position: absolute;
      height: 90%;
      width: 0.1em;
      background-color: ${(props) => props.theme.colors.clr600};
      top: 10%;
      right: -0.9em;
    }

    @media screen and (max-width: 700px) {
      &:after {
        display: none;
      }
    }
  }
`;

const HeaderSIh3 = styled.h2`
  font-size: 1em;
  margin-bottom: 0.8em;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.clr600};
`;

const HeaderSIp = styled.p`
  overflow-wrap: break-word;
  max-width: 10ch;
  font-size: 1.8em;
  line-height: 1.6;
  font-weight: 600;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.clr800};

  @media screen and (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export { HeaderSection, HeaderSectionDiv, HeaderSIh3, HeaderSIp };
