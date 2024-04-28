import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const ImpactSecWrapper = styled(Box)`
  border-top: 2px solid ${primaryColors.primary};
  .impact_outr {
    padding: 100px 0;
    border-left: 2px solid ${primaryColors.primary};
    border-right: 2px solid ${primaryColors.primary};
    @media (max-width: 899px) {
      padding: 65px 0;
    }
    h4 {
      padding-left: 45px;
      font-size: 16px;
      font-weight: 700;
      font-family: "Roboto";
    }
  }
  .impact_inr {
    h3 {
      font-size: 60px;
      letter-spacing: -2.4px;
      font-weight: 400;
      @media (max-width: 359px) {
        font-size: 50px;
      }
    }
    h5 {
      font-family: "Roboto";
      font-size: 16px;
      font-weight: 700;
      margin: 12px 0;
    }
  }
  .impact_rgt {
    padding-right: 100px;
    @media (max-width: 899px) {
      padding-right: 30px;
      padding-left: 95px;
    }
  }
`;

const impactData = [
  {
    number: "N/A",
    title: "Reported Financial Impact:",
    text: "Not Reported to the SEC."
  },
  {
    number: "$2B",
    title: "Stock Price Impact:",
    text: "Following the disclosure of the breach, Okta's market capitalization decreased by more than $2 billion. The company's stock prices fell, with shares slumping more than 11% on the day the company acknowledged the hack, and continuing to fall in the following days."
  },
  {
    number: "$9.48M",
    title: "Avg Cost of a Data Breach in the US",
    text: ""
  },
  {
    number: "$4.97M",
    title: "Avg Cost of a Data Breach in the Technological Sector Worldwide",
    text: ""
  }
];

export default function ImpactSec() {
  return (
    <ImpactSecWrapper>
      <Container fixed>
        <Box className="impact_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3.8}>
              <Typography variant="h4">Impacts:</Typography>
            </Grid>
            <Grid item xs={12} md={8.2}>
              <Box className="impact_rgt">
                <Grid container columnSpacing={6} rowSpacing={5}>
                  {impactData.map((data) => (
                    <Grid item xs={12} md={6}>
                      <Box className="impact_inr">
                        <Typography variant="h3">{data.number}</Typography>
                        <Typography variant="h5">{data.title}</Typography>
                        <Typography variant="body1">{data.text}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ImpactSecWrapper>
  );
}
