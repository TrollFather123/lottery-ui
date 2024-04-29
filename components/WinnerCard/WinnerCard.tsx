import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

export const WinnerCardWrapper = styled(Box)`
  .winner_box {
    border: 1px solid #eeeeee;
    border-radius: 15px;
    .winner_img {
      display: inline-block;
      width: 100%;
      border-radius: 15px 15px 0 0;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      img {
        width: 100%;
        height: auto;
        transition: all 0.3s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .winner_cont {
      text-align: center;
      padding: 10px 5px 20px;
      font-size: 14px;
      line-height: 1;
      color: ${primaryColors.color727272};
      h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 17px;
        a {
          display: inline-block;
          text-decoration: none;
          color: ${primaryColors.color252525};
          transition: all 0.3s ease-in-out;
          &:hover {
            color: ${primaryColors.primary};
          }
        }
      }
      .win_location {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        img {
          height: auto;
          margin-right: 8px;
          flex-shrink: 0;
        }
        span {
          display: inline-block;
        }
      }
      .lottrey_name {
        display: inline-block;
        margin-bottom: 9px;
      }
      .win_date {
        span {
          display: inline-block;
          padding-left: 5px;
          font-weight: 500;
          margin-bottom: 15px;
        }
      }
      .price {
        font-size: 18px;
        font-weight: 700;
        color: ${primaryColors.primary};
      }
    }
  }
`;

interface winnerprops {
  winnerimg: string;
  winnername: string;
  winnerloction: string;
  lotteryname: string;
  lotterydate: string;
  lotteryprice: string;
}

export default function WinnerCard({
  winnerimg,
  winnername,
  winnerloction,
  lotteryname,
  lotterydate,
  lotteryprice
}: winnerprops) {
  return (
    <WinnerCardWrapper>
      <Box className="winner_box">
        <Link href="#url" className="winner_img">
          <Image src={winnerimg} alt="winner1" width={264} height={264} />
        </Link>
        <Box className="winner_cont">
          <Typography variant="h3">
            <Link href="#url">{winnername}</Link>
          </Typography>
          <Box className="win_location">
            <Image src={assest.gps} alt="gps" width={12} height={14} />
            <Typography variant="caption">{winnerloction}</Typography>
          </Box>
          <Typography variant="caption" className="lottrey_name">
            {lotteryname}
          </Typography>
          <Box className="win_date">
            Draw date: <Typography variant="caption">{lotterydate}</Typography>
          </Box>
          <Typography variant="caption" className="price">
            {lotteryprice}
          </Typography>
        </Box>
      </Box>
    </WinnerCardWrapper>
  );
}
