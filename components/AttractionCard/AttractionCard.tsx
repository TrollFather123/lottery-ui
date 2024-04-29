/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { primaryColors } from "@/themes/_muiPalette";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import Image from "next/image";

export const AttractionCardWrapper = styled(Box)`
  .attr_box {
    padding: 16px 16px 22px;
    background: ${primaryColors.white};
    border-radius: 15px;
    box-shadow: 0px 24px 84px rgba(0, 0, 0, 0.1);
    .attr-img {
      display: inline-block;
      height: auto;
      transition: all 0.3s ease-in-out;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 10px;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        width: 100%;
        transition: all 0.3s ease-in-out;
      }
    }
    h3 {
      color: ${primaryColors.color252525};
      font-size: 18px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 14px;
      transition: all 0.3s ease-in-out;
      a {
        color: ${primaryColors.color252525};
        display: inline-block;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: ${primaryColors.primary};
        }
      }
    }
    .attr_mid {
      margin-bottom: 20px;
      .attrmid_wrap {
        display: flex;
        align-items: center;
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 7px;
        }
        span {
          display: inline-block;
          color: ${primaryColors.color727272};
          font-weight: 400;
          font-size: 14px;
          flex-shrink: 0;
          width: 30%;
        }
        ul {
          display: flex;
          align-items: center;
          width: 70%;
          padding: 0;
          > li {
            position: relative;
            color: ${primaryColors.color727272};
            font-weight: 500;
            font-size: 14px;
            line-height: 1;
            padding: 0 2px;
            width: 50%;
            &:not(:first-child):before {
              content: "";
              position: absolute;
              width: 5px;
              height: 5px;
              top: 5px;
              left: -18px;
              background: ${primaryColors.color727272};
              border-radius: 50%;
            }
          }
        }
      }
    }
    .cmn_btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 10px;
      min-width: 100%;
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      text-decoration: none;
      color: ${primaryColors.white};
      background: ${primaryColors.primary};
      border-radius: 50px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: ${primaryColors.black};
      }
    }
  }
`;
interface attrrationprops {
  attrracimg: string;
  title: string;
  drawdate: string;
  drawtime: string;
  saledate: string;
  saletime: string;
}
export default function AttractionCard({
  attrracimg,
  title,
  drawdate,
  drawtime,
  saledate,
  saletime
}: attrrationprops) {
  return (
    <AttractionCardWrapper>
      <Box className="attr_box">
        <Link href="#url" className="attr-img">
          <Image src={attrracimg} alt="attr1" width={335} height={343} />
        </Link>

        <Typography variant="h3">
          <Link href="#url">{title}</Link>
        </Typography>
        <Box className="attr_mid">
          <Box className="attrmid_wrap">
            <Typography variant="caption">Draw start at:</Typography>
            <List>
              <ListItem>{drawdate}</ListItem>
              <ListItem>{drawtime}</ListItem>
            </List>
          </Box>
          <Box className="attrmid_wrap">
            <Typography variant="caption">sale stope at:</Typography>
            <List>
              <ListItem>{saledate}</ListItem>
              <ListItem>{saletime}</ListItem>
            </List>
          </Box>
        </Box>
        <Link href="#url" className="cmn_btn">
          Add to cart
        </Link>
      </Box>
    </AttractionCardWrapper>
  );
}
