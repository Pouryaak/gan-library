import styled from "@emotion/styled";
import { THEME } from "../../../theme";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
    background: ${THEME.primaryColor};
    padding: 15px 10px;
    width: 100%;
`;

export const HeaderTitle = styled.div`
    color: ${THEME.lightTextColor};
    font-size: 30px;
`;

export const MenuLink = styled(NavLink)`
    color: ${THEME.lightTextColor};
    font-size: 22px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &.active {
        color: ${THEME.secondaryColor};
    }

`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;