import styled from "styled-components";
import { getValueFromTheme } from "../../common/utils/getValueFromTheme";
import { media } from "../../common/styles/styles";

export const NavBarWrapper = styled.header`
  padding: 30px 36px;
  background: ${getValueFromTheme("bgHeader")};
  box-shadow: 0 3px 2px -2px ${getValueFromTheme('shadowColor')};
  ${media.smallMode} {
    padding: 1.5rem;
  }
`;

export const NavbarGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: fit-content(185px) 1fr 185px;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  ${media.mediumMode} {
    grid-template-rows: fit-content(40px) 1fr;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mediumMode} {
    justify-content: start;
  }
`;

export const ThemeSwitchWrapper = styled(NavbarLogo)``;
