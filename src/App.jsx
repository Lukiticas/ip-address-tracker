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

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [data, setData] = useState({
    ip: "",
    location: [0, 0],
    name: "",
    timezone: "",
    isp: "",
  });

  const getUserLocation = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    const { data } = res;

    setData({
      ip: data.IPv4,
      location: [data.latitude, data.longitude],
      name: `${data.city}, ${data.state} - ${data.country_code}`,
      timezone: "N/A",
      isp: "N/A",
    });
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

      <div className="App">
        <Header data={data} handleChangeData={setData} />
        <IPMap coords={data.location} />
        <Toggle handleToggle={toggleTheme} />
      </div>
    </ThemeProvider>
  );
};

export default App;
