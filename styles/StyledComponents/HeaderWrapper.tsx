import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;

  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 9;
  transition: all 0.8s ease;
  &.bg-color {
    background: ${primaryColors?.white};
    box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
    &.show-down {
      transform: translateY(-100%);
      box-shadow: none;
    }
    &.show-up {
      transform: translateY(0);
    }
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
    justify-content: space-between;
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    button {
      padding: 11px 42px;
      min-width: auto;
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon {
      margin-right: 18px;
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
    @media (max-width: 599px) {
      padding: 10px 0;
    }
  }

  .headerLogo {
    width: 160px;
    display: inline-block;
    transition: all 0.4s;
    @media (max-width: 599px) {
      width: 115px;
    }
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
`;
