import { useState } from "react";
import axios from "axios";

import { CIButton, CIForm, CIInput } from "./ControledInput.styles";
import Arrow from "/images/icon-arrow.svg";

const API_KEY = import.meta.env.VITE_GEOAPI_KEY;

const ControledInput = ({ handleChangeData, ...args }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const requestAPI = async (ip) => {
    try {
      const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;

      const response = await axios.get(URL);
      const data = response.data;

      handleChangeData({
        ip: data.ip,
        location: [data.location.lat, data.location.lng],
        name: `${data.location.city}, ${data.location.region} - ${data.location.country}`,
        timezone: data.location.timezone,
        isp: data.isp,
      });
    } catch (err) {
      handleChangeData({
        ip: `code: ${err.response.status}`,
        location: [0, 0],
        name: `Invalid IP: ${inputValue}`,
        timezone: "N/A",
        isp: "N/A",
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValue.length || inputValue.length > 3) {
      const data = new FormData(evt.target).get("IP");
      requestAPI(data);
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
