import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BannerWrapper = styled(Box)`
  padding: 50px 0 0 0;
  overflow: hidden;
  .banner_txt_grid {
    @media (max-width: 899px) {
      order: 2;
    }
  }
  .banner_image_grid {
    @media (max-width: 899px) {
      order: 1;
      text-align: right;
    }
  }
  .banner_upper {
    position: relative;
    z-index: 2;
  }
  .banner_text_wrapper {
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 402px;
      height: 404px;
      left: -130px;
      top: -80px;
      background: rgba(255, 170, 0, 0.1);
      filter: blur(92px);
      z-index: -1;
    }
    &::before {
      content: "";
      position: absolute;
      width: 361px;
      height: 362px;
      right: -50px;
      bottom: -100px;
      background: rgba(255, 170, 0, 0.2);
      filter: blur(92px);
    }
  }
  .banner_text {
    h1 {
      color: ${primaryColors?.primary};
      margin-bottom: 35px;
      span {
        font-weight: 300;
        font-size: 50px;
        line-height: 74px;
        text-transform: capitalize;
        color: ${primaryColors?.textPrimaryColor};
        display: block;
      }
    }
  }
  .banner_fig {
    position: relative;
    overflow: hidden;
    margin-bottom: -10px;
    figure {
      line-height: 1;
      font-size: 1;
    }
  }
`;
