import { useState } from "react";
import { CIButton, CIForm, CIInput } from "./ControledInput.styles";
import Arrow from "/images/icon-arrow.svg";

const ControledInput = ({ handleChangeData, ...args }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.length || inputValue.length > 3) {
      const data = new FormData(evt.target).get("IP");
      handleChangeData(data);
    } else {
      evt.target[0].setCustomValidity("Invalid Value");
      return;
    }
  };

  return (
    <CIForm name="IP" onSubmit={handleSubmit}>
      <CIInput
        name="IP"
        required
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Search for any IP address or domain"
        {...args}
      />
      <CIButton type="submit">
        <img src={Arrow} alt="arrow-icon" />
      </CIButton>
    </CIForm>
  );
};

export default ControledInput;
