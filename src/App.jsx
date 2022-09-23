import { useEffect, useState } from "react";
import { usePersistedState } from "./utils";
import axios from "axios";

import Header from "./components/Header/Header.component";
import IPMap from "./components/IPMap/IPMap.component";
import Toggle from "./components/Toggle/Toggle.component";

import { GlobalStyle } from "./styles/global.styles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const API_KEY = import.meta.env.VITE_GEOAPI_KEY;

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [data, setData] = useState({
    ip: "Made by Lucas",
    location: [35.652832, 139.839478],
    name: "Tokyo",
    timezone: "GMT+9",
    isp: "Sakura Fiber",
    zoom: 15,
  });

  const requestAPI = async (ip) => {
    try {
      const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`;
      const response = await axios.get(URL);
      const data = response.data;

      setData({
        ip: data.ip,
        location: [data.location.lat, data.location.lng],
        name: `${data.location.city}, ${data.location.region} - ${data.location.country}`,
        timezone: data.location.timezone,
        isp: data.isp,
        zoom: 15,
      });
    } catch (err) {
      console.log(err);
      setData({
        ip: `${ip}`,
        location: [0, 0],
        name: `Invalid IP`,
        timezone: "N/A",
        isp: `code: ${err.response.status}`,
        zoom: 3,
      });
    }
  };

  const getUserLocation = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    requestAPI(res.data.IPv4);
  };

  const toggleTheme = () => {
    setTheme(theme.title == "light" ? dark : light);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <main className="App">
        <Header data={data} handleChangeData={requestAPI} />
        <IPMap coords={data.location} zoom={data.zoom} />
        <Toggle handleToggle={toggleTheme} />
      </main>
    </ThemeProvider>
  );
};

export default App;
