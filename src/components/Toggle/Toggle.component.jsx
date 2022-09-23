import { useContext } from "react";
import { ThemeContext } from "styled-components";

import ReactSwitch from "react-switch";
import ToggleWrapper from "./Toggle.styles";

import FullMoon from "/checked.png";
import Moon from "/unchecked.png";

const Toggle = ({ handleToggle }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <ToggleWrapper>
      <ReactSwitch
        checked={title === "light"}
        onChange={() => handleToggle()}
        checkedIcon={false}
        uncheckedIcon={false}
        uncheckedHandleIcon={
          <div className="moon">
            <img alt="icon" src={Moon} />
          </div>
        }
        checkedHandleIcon={
          <div className="moon">
            <img alt="icon" className="moon" src={FullMoon} />
          </div>
        }
        handleDiameter={30}
        height={30}
        width={60}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        offColor={colors.clr800}
        onColor={colors.clr800}
        onHandleColor={colors.clr400}
        offHandleColor={colors.clr600}
      />
    </ToggleWrapper>
  );
};

export default Toggle;
