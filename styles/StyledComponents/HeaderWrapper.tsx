import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;

  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
    justify-content: space-between;
  }
  .hdr_rgt {
    display: flex;
    align-items: center;

    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      width: 15px;
      height: 15px;
      font-weight: 700;
      font-size: 9px;
      line-height: 1;
      color: ${primaryColors?.white};
      padding: 0;
      border-radius: 50px;
      min-width: auto;
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
    width: 240px;
    display: inline-block;
    transition: all 0.4s;
    @media (max-width: 599px) {
      width: 115px;
    }
  }
  .navbar {
    margin: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-weight: 500;
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
