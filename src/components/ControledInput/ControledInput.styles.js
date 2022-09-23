import styled from "styled-components";

const CIForm = styled.form`
  position: relative;
  display: flex;

  height: 3.5rem;
  width: clamp(6rem, 100%, 40rem);

  flex-direction: row nowrap;
  align-items: center;

  overflow: hidden;

  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover,
  &:focus-within {
    & > button > img {
      transform: rotate(180deg);
    }
  }
`;

const CIInput = styled.input`
  font-size: 1.1rem;
  height: 100%;
  width: 100%;

  outline: none;
  border: none;

  padding: 2rem;
  color: ${(props) => props.theme.colors.clr800};

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
