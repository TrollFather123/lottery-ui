import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const LearnSecWrapper = styled(Box)`
  border-top: 2px solid ${primaryColors.primary};
  border-bottom: 2px solid ${primaryColors.primary};
  .learn_outr {
    padding: 100px 0;
    border-left: 2px solid ${primaryColors.primary};
    border-right: 2px solid ${primaryColors.primary};
    @media (max-width: 899px) {
      padding: 50px 0;
    }
    h4 {
      padding-left: 45px;
      font-size: 16px;
      font-weight: 700;
      font-family: "Roboto";
    }
  }
  .learn_rgt {
    @media (max-width: 899px) {
      padding-left: 95px;
      padding-right: 30px;
    }
    p {
      margin-bottom: 30px;
    }
    a {
      color: ${primaryColors.mainFontColor};
      text-decoration: underline;
      @media (max-width: 899px) {
        word-break: break-all;
      }
      &:hover {
        color: ${primaryColors.primary};
      }
    }
  }
`;

export default function LearnSec() {
  return (
    <LearnSecWrapper>
      <Container fixed>
        <Box className="learn_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3.8}>
              <Typography variant="h4">Learn More:</Typography>
            </Grid>
            <Grid item xs={12} md={8.2}>
              <Box className="learn_rgt">
                <Typography variant="body1">
                  Watch our video presentation of Okta’s recent hacking on our
                  LinkedIn.
                </Typography>
                <Link href="/">
                  https://www.linkedin.com/posts/sydnia_cybersecurity-mortgageindustry-cyberattack-activity-7150568726671560704-12-v
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LearnSecWrapper>
  );
}
