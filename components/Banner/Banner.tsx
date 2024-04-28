/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @next/next/no-img-element */
import Box, { BoxProps } from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import assest from "@/json/assest";
import { BannerWrapper } from "@/styles/StyledComponents/BannerWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";

interface BannerProps extends BoxProps {}

const Banner: React.FC<BannerProps & BoxProps> = ({ ...props }) => {
  return (
    <BannerWrapper {...props}>
      <Box className="banner_upper">
        <Container fixed>
          <Box className="banner_text_wrapper">
            <Grid
              container
              columnSpacing={{ md: 3, xs: 0 }}
              rowSpacing={{ md: 0, xs: 2 }}
              alignItems="center"
            >
              <Grid item md={6} xs={12} className="banner_txt_grid">
                <Box className="banner_text">
                  <Typography variant="h1">
                    <Typography variant="caption">Welcome to the</Typography>
                    rajshreelottery
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur. Est viverra pulvinar
                    id a tortor ullamcorper a neque gravida. Sit lectus amet
                    vitae malesuada nibh.
                  </Typography>

                  <CustomButtonPrimary variant="contained" color="primary">
                    Learn More
                  </CustomButtonPrimary>
                </Box>
              </Grid>
              <Grid item md={6} xs={12} className="banner_image_grid">
                <Box className="banner_fig">
                  <figure>
                    <Image
                      src={assest?.banner_image}
                      alt="banner_image"
                      width={785}
                      height={672}
                    />
                  </figure>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </BannerWrapper>
  );
};

export default Banner;
