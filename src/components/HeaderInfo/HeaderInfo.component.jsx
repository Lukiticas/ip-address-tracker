import {
  HeaderSection,
  HeaderSectionDiv,
  HeaderSIh3,
  HeaderSIp,
} from "./HeaderInfo.styles";

const HeaderInfo = ({ ipAdress, location, timezone, ISP }) => {
  return (
    <HeaderSection className="header-section">
      <HeaderSectionDiv>
        <HeaderSIh3>Ip Address</HeaderSIh3>
        <HeaderSIp>{ipAdress}</HeaderSIp>
      </HeaderSectionDiv>
      <HeaderSectionDiv>
        <HeaderSIh3>Location</HeaderSIh3>
        <HeaderSIp>{location}</HeaderSIp>
      </HeaderSectionDiv>
      <HeaderSectionDiv>
        <HeaderSIh3>Timezone</HeaderSIh3>
        <HeaderSIp>{timezone}</HeaderSIp>
      </HeaderSectionDiv>
      <HeaderSectionDiv>
        <HeaderSIh3>isp</HeaderSIh3>
        <HeaderSIp>{ISP}</HeaderSIp>
      </HeaderSectionDiv>
    </HeaderSection>
  );
};

export default HeaderInfo;
