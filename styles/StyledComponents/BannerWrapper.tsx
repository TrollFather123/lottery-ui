import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BannerWrapper = styled(Box)`
  padding: 90px 0 0 0;
  background-color: ${primaryColors?.black};
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
  .wave_img_wrapper {
    position: relative;
    z-index: 1;
    font-size: 0;
    line-height: 0;
    margin-top: -100px;
    @media (max-width: 1199px) {
      margin-top: 0px;
    }
    @media (max-width: 599px) {
      margin-top: 100px;
    }
    img {
      width: 100%;
      height: auto;
    }
    .wave_img1 {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      object-fit: contain;
      z-index: -1;
    }
  }
  .banner_text_wrapper {
    position: relative;
    .dropdown_btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-width: auto;
      width: 52px;
      height: 52px;
      border-radius: 100%;
      border: 2px solid ${primaryColors?.primary};
      background-color: ${primaryColors?.white};
      padding: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      @media (max-width: 599px) {
        bottom: -80px;
      }
    }
  }
  .banner_text {
    padding-top: 250px;
    @media (max-width: 1199px) {
      padding-top: 150px;
    }
    @media (max-width: 899px) {
      padding-top: 0px;
    }
    h1 {
      text-align: right;
      @media (max-width: 899px) {
        max-width: 325px;
      }
      .font_60 {
        font-size: 60px;
        @media (max-width: 899px) {
          font-size: 36px;
        }
      }
      .font_97 {
        font-size: 97px;
        display: block;
        padding-right: 90px;
        @media (max-width: 899px) {
          font-size: 60px;
        }
        &.no_block {
          display: inline;
        }
      }
      .font_40 {
        font-size: 40px;
        display: block;
        padding-right: 90px;
      }
    }
  }
  .banner_fig {
    position: relative;
    padding-bottom: 100%;
    overflow: hidden;
    @media (max-width: 1199px) {
      padding-bottom: 70%;
    }
    @media (max-width: 899px) {
      padding-bottom: 56.25%;
    }
    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      object-fit: cover;
    }
  }
`;
