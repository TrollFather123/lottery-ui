import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const FooterWrap = styled(Box)`
  background-color: ${primaryColors?.textPrimaryColor};
  .ftr_upper {
    padding: 75px 0 110px;
  }
  .ftr-wrapper {
    padding: 0 60px;
    @media (max-width: 899px) {
      padding: 0;
    }
    h2 {
      max-width: 582px;
      font-size: 60px;
      @media (max-width: 899px) {
        font-size: 37px;
      }
    }
  }
  .ftr_para {
    margin-bottom: 45px;
  }
  .ftr_logo {
    line-height: 0;
    @media (max-width: 899px) {
      margin-bottom: 90px;
    }
    > a {
      line-height: 0;
      display: inline-block;
      width: 278px;
      margin-bottom: 16px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: ${primaryColors?.colordfdfdf};
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        display: block;
        &:not(:last-child) {
          margin-right: 16px;
        }
        a {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 188, 0, 0.4);
          border-radius: 100%;
        }
      }
    }
  }
  .ftr_btm {
    padding: 25px 0;
    text-align: center;
    border-top: 1px solid ${primaryColors?.color363636};
    p {
      font-size: 15px;
      color: ${primaryColors?.color979797};
      a {
        color: inherit;
        &:hover {
          color: ${primaryColors?.primary};
        }
      }
    }
    @media (max-width: 899px) {
    }
  }
  .ftr_content {
    padding-left: 40px;
    @media (max-width: 899px) {
      padding-left: 0px;
    }
    button {
      @media (max-width: 899px) {
        min-width: 100%;
        span {
          margin-right: auto;
        }
      }
    }
    .ftr_head {
      font-weight: 500;
      font-size: 20px;
      text-transform: capitalize;
      color: ${primaryColors?.white};
    }
    ul {
      li {
        &:not(:last-child) {
          margin-bottom: 25px;
        }
        a {
          font-size: 16px;
          text-transform: capitalize;
          color: ${primaryColors?.colordfdfdf};
          &:hover {
            color: ${primaryColors?.primary};
          }
        }
      }
    }
  }
`;
