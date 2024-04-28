import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const BreachesSecWrapper = styled(Box)`
  padding: 100px 0 0;
  @media (max-width: 899px) {
    padding: 0;
  }
  .breach_title {
    margin-bottom: 60px;
    h3 {
      color: ${primaryColors?.primary1};
      margin-bottom: 15px;
    }
    > p {
      max-width: 538px;
      font-weight: 700;
    }
  }
  .breach_upper_otr {
    border-top: 2px solid ${primaryColors?.primary};
    border-bottom: 2px solid ${primaryColors?.primary};
  }
  .breach_mdl_otr {
    min-height: 365px;
    padding: 40px 15px;
    justify-content: space-between;
    border-right: 2px solid ${primaryColors?.primary};
    border-left: 2px solid ${primaryColors?.primary};
    @media (max-width: 899px) {
      min-height: 150px;
      padding: 10px 15px;
    }
    .breach_mdl_upper {
      text-align: center;
      button {
        background-color: transparent;
        font-family: "Lato";
        font-weight: 700;
        font-size: 16px;
        color: ${primaryColors?.primary};
        &:hover {
          color: ${primaryColors?.primary1};
        }
      }
    }
    .breach_mdl_btm {
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
        left: -80px;
        bottom: -8px;
        @media (max-width: 899px) {
          width: 15px;
          height: 15px;
          left: -35px;
          bottom: 0;
        }
      }
      h5 {
        font-weight: 700;
        font-size: 16px;
        color: ${primaryColors?.primary};
        @media (max-width: 899px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const BreachEachContent = styled(Box)`
  border: 2px solid ${primaryColors?.primary};
  &.no_top_border {
    border-top: 0;
    position: relative;
    &::after {
      content: "";
      width: 2px;
      height: 12px;
      background-color: ${primaryColors?.primary};
      position: absolute;
      left: -2px;
      bottom: -14px;
      z-index: 1;
    }
    &::before {
      content: "";
      width: 2px;
      height: 12px;
      background-color: ${primaryColors?.primary};
      position: absolute;
      right: -2px;
      bottom: -14px;
      z-index: 1;
    }
  }
  &.no_bottom_border {
    border-bottom: 0;
    @media (max-width: 899px) {
      border-bottom: 2px solid ${primaryColors?.primary};
    }
  }
  .number_block {
    padding: 6px 16px;
    border-bottom: 2px solid ${primaryColors?.primary1};
    h6 {
      font-size: 14.17px;
      font-weight: 400;
    }
    &.top_border {
      border-top: 2px solid ${primaryColors?.primary1};
      border-bottom: 0;
    }
  }
  .company_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 190px;
    padding: 10px 45px;
    background-color: ${primaryColors?.white};
    &:hover {
      background-color: ${primaryColors?.white};
    }
    @media (max-width: 1199px) {
      min-height: 165px;
      padding: 10px 20px;
    }
    @media (max-width: 899px) {
      min-height: auto;
      padding: 10px 35px;
      height: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
export const BreachGallery = styled(Stack)`
  margin: -6px -6px;
  .each_items {
    width: calc(100% / 4);
    padding: 6px 6px;
    @media (max-width: 899px) {
      width: calc(100% / 2);
      &:nth-child(7),
      &:nth-child(8) {
        .no_bottom_border {
          border-bottom: 2px solid transparent;
        }
      }
    }
    @media (max-width: 359px) {
      width: calc(100% / 1);
    }
  }
`;

export const GalleryItemDetailsWrapper = styled(Box)`
  .details_block_upper {
    border-bottom: 2px solid ${primaryColors?.primary};
    .card_block {
      flex-basis: 255px;
      width: 255px;
      @media (max-width: 599px) {
        flex-basis: 168px;
        width: 168px;
      }
    }
    .details {
      flex-basis: calc(100% - 255px);
      width: calc(100% - 255px);
      padding: 20px 20px 20px 65px;
      display: flex;
      align-items: center;
      @media (max-width: 599px) {
        flex-basis: calc(100% - 168px);
        width: calc(100% - 168px);
        padding: 15px 15px;
      }
      ul {
        li {
          display: block;
          h5 {
            font-size: 16px;
            font-weight: 400;
            font-family: "Roboto";
            @media (max-width: 599px) {
              font-size: 12px;
            }
          }
          p {
            font-weight: 700;
            @media (max-width: 599px) {
              font-size: 12px;
            }
          }
          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }
    .no_top_border,
    .no_bottom_border {
      border-left: 0;
      border-bottom: 0;
      border-top: 0;
      &::after,
      &::before {
        display: none;
      }
    }
  }
  .details_block_btm {
    padding: 68px 46px 108px;
    @media (max-width: 899px) {
      padding: 60px 25px;
    }
    .details_title {
      width: 375px;
      padding-right: 20px;
      @media (max-width: 899px) {
        width: 100%;
        padding: 0;
        margin-bottom: 20px;
      }
      h5 {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 16px;
      }
    }
    .details_content {
      width: calc(100% - 375px);
      @media (max-width: 899px) {
        width: 100%;
      }
    }
  }
`;
export const DetailsSec = styled(Box)`
  border-top: 2px solid ${primaryColors?.primary};
  /* border-bottom: 2px solid ${primaryColors?.primary}; */
  .each_detail {
    border-right: 2px solid ${primaryColors?.primary};
    border-left: 2px solid ${primaryColors?.primary};
  }
`;
