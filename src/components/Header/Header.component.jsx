import ControledInput from "../ControledInput/ControledInput.component";
import HeaderInfo from "../HeaderInfo/HeaderInfo.component";
import { HeaderImg, HeaderWrapper, InputSection } from "./Header.styles";
import bgBackground from "/images/pattern-bg.png";

const Header = ({ data, handleChangeData }) => {
  return (
    <HeaderWrapper>
      <HeaderImg src={bgBackground} alt="background" />
      <InputSection>
        <h1>IP Address Tracker</h1>
        <ControledInput handleChangeData={handleChangeData} />
        <HeaderInfo
          ipAdress={data.ip ? data.ip : "N/A"}
          location={data.name ? data.name : "N/A"}
          timezone={data.timezone ? data.timezone : "N/A"}
          ISP={data.isp ? data.isp : "N/A"}
        />
      </InputSection>
    </HeaderWrapper>
  );
};

export default Header;
