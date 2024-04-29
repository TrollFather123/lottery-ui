/* eslint-disable react/no-array-index-key */
/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import CommonHeading from "../CommonHeading/CommonHeading";
import WinnerCard from "../WinnerCard/WinnerCard";

export const WinnerWrapper = styled(Box)``;

const WinnerList = [
  {
    winnerimg: `${assest.winner1}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner2}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner3}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner4}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner5}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner6}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner7}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  },
  {
    winnerimg: `${assest.winner8}`,
    winnername: "Ganpat Vithoba Chaudhari",
    winnerloction: "Mumbai",
    lotteryname: "Rajshree 20 shukra weekly lottery",
    lotterydate: "29 apr, 2024 ",
    lotteryprice: "₹ 7,00,000"
  }
];

export default function Winner() {
  return (
    <WinnerWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeading title="Latest Winners" />
        <Box className="winner_wrap">
          <Grid container spacing={3.2}>
            {WinnerList.map((item, index) => (
              <Grid item md={3} key={index}>
                <WinnerCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </WinnerWrapper>
  );
}
