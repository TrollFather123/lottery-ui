import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import React from "react";

export const UncoverSecWrapper = styled(Box)`
  margin-top: -1px;
  .uncover_content {
    h3 {
      color: ${primaryColors?.primary};
      max-width: 440px;
      margin-bottom: 30px;
    }
    h4 {
      margin-bottom: 30px;
    }
  }
`;

interface uncoverProps extends BoxProps {
  title: string;
  subTitle: string;
}

const UncoverSec: React.FC<uncoverProps & BoxProps> = ({
  title,
  subTitle,
  ...props
}) => {
  return (
    <UncoverSecWrapper {...props}>
      <Container fixed>
        <Grid
          container
          columnSpacing={{ md: 3, xs: 0 }}
          rowSpacing={{ md: 0, xs: 2 }}
        >
          <Grid item md={6} xs={12}>
            <Box className="uncover_content">
              <Typography variant="h3">{title}</Typography>
              <Typography variant="h4">{subTitle}</Typography>
              {props?.children}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </UncoverSecWrapper>
  );
};

export default UncoverSec;
