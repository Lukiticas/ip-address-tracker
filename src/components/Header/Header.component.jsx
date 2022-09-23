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
          ipAdress={data.ip}
          location={data.name}
          timezone={data.timezone}
          ISP={data.isp}
        />
      </InputSection>
    </HeaderWrapper>
  );
};

export default Header;
