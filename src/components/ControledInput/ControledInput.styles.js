import styled from "styled-components";

const CIForm = styled.form`
  position: relative;
  display: flex;

  height: 3.8em;
  width: clamp(6em, 100%, 40em);

  flex-direction: row nowrap;
  align-items: center;

  overflow: hidden;

  border-radius: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover,
  &:focus-within {
    & > button > img {
      transform: rotate(180deg);
    }
  }
`;

const CIInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1.2em;

  outline: none;
  border: none;

  padding: 2rem;
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.clr400
      : props.theme.colors.clr600};

  :placeholder {
    color: ${(props) => props.theme.colors.clr600};
  }
`;

const CIButton = styled.button`
  height: 100%;
  width: 4rem;

  cursor: pointer;
  background: none;
  border: none;

  color: ${(props) => props.theme.colors.clr400};
  background-color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.clr600
      : props.theme.colors.clr800};

  transition: all 100ms ease-in;
  & > img {
    transition: transform 100ms ease-in;
    width: 1rem;
  }

  &:hover {
    filter: contrast(0.6);
  }

  &:active {
    background-color: ${(props) => props.theme.colors.clr400};
  }
`;

export { CIForm, CIInput, CIButton };
