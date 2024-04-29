/* eslint-disable react/no-array-index-key */
/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { Box, Grid, styled } from "@mui/material";
import { Container } from "@mui/system";
import AttractionCard from "../AttractionCard/AttractionCard";
import CommonHeading from "../CommonHeading/CommonHeading";

export const AttractionWrapper = styled(Box)``;

const Attract = [
  {
    attrracimg: `${assest.attr1}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  },
  {
    attrracimg: `${assest.attr2}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  },
  {
    attrracimg: `${assest.attr3}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  },
  {
    attrracimg: `${assest.attr4}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  },
  {
    attrracimg: `${assest.attr5}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  },
  {
    attrracimg: `${assest.attr6}`,
    title: "Lorem ipsum dolor sit",
    drawdate: "29 apr, 2024 ",
    drawtime: "6:30 PM",
    saledate: "29 apr, 2024 ",
    saletime: "6:30 PM"
  }
];
export default function Attraction() {
  return (
    <AttractionWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeading title="Upcoming Attraction" />
        <Box className="attr_wrap">
          <Grid container spacing={3.2}>
            {Attract.map((item, index) => (
              <Grid item md={4} key={index}>
                <AttractionCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </AttractionWrapper>
  );
}
