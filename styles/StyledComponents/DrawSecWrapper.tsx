import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const DrawSecWrapper = styled(Box)`
  background: url(${assest?.draw_bg_img}) no-repeat center;
  background-size: 100% 100%;
  padding: 124px 0;
  .draw_sec {
    text-align: center;
    h2 {
      color: ${primaryColors?.white};
      margin-bottom: 25px;
    }
    p {
      color: ${primaryColors?.white};
      max-width: 668px;
      margin: 0 auto 25px;
    }
  }
`;
