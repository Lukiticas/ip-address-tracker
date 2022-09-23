import styled from "styled-components";

const HeaderSection = styled.section`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  align-items: center;
  justify-content: center;

  min-height: 8em;
  width: 100%;
  max-width: 75rem;

  font-family: ${(props) => props.theme.font.family};

  padding: 2.3em;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.clr400};
  transition: transform 100ms ease-in;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover,
  :focus-visible {
    transform: scale(1.02);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const HeaderSectionDiv = styled.div`
  height: 100%;
  position: relative;
  overflow-wrap: break-word;

  &:not(:last-of-type) {
    &:after {
      content: "";
      position: absolute;
      height: 70%;
      width: 0.01em;
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

  @media screen and (max-width: 700px) {
    text-align: center;
  }
`;

const HeaderSIh3 = styled.h2`
  font-size: 1em;
  margin-bottom: 0.8em;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.clr600};
`;

const HeaderSIp = styled.p`
  max-width: 18ch;
  font-size: 1.8em;
  line-height: 1.6;
  font-weight: 500;
  color: ${(props) => props.theme.colors.clr800};

  @media screen and (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export { HeaderSection, HeaderSectionDiv, HeaderSIh3, HeaderSIp };
