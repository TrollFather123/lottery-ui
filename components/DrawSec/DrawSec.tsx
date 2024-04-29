import { DrawSecWrapper } from "@/styles/StyledComponents/DrawSecWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import { Box, BoxProps, Container, Stack, Typography } from "@mui/material";
import React from "react";

const DrawSec: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <DrawSecWrapper {...props}>
      <Container fixed>
        <Box className="draw_sec">
          <Typography variant="h2">Lorem ipsum dolor sit amet</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Est viverra pulvinar id a
            tortor ullamcorper a neque gravida. Sit lectus amet vitae malesuada
            nibh.
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <CustomButtonPrimary variant="contained" color="primary">
              Know more
            </CustomButtonPrimary>
          </Stack>
        </Box>
      </Container>
    </DrawSecWrapper>
  );
};

export default DrawSec;
