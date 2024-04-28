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
import { primaryColors } from "@/themes/_muiPalette";
import DropDownIcon from "@/ui/Icons/DropdownIcon";
import { useGSAP } from "@gsap/react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

interface BannerProps extends BoxProps {
  scrollToSection: () => void;
}

gsap.registerPlugin(ScrollTrigger);

const Banner: React.FC<BannerProps & BoxProps> = ({
  scrollToSection,
  ...props
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const waveOneRef = useRef<HTMLImageElement>(null);
  const waveTwoRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.in"
        }
      });

      tl.from(
        waveOneRef.current,
        { opacity: 1, ease: "power1", duration: 1 },
        "-=.5"
      )
        .to(
          waveOneRef.current,
          {
            opacity: 0,
            ease: "power1",
            duration: 1
          },
          "-=.5"
        )
        .from(
          waveTwoRef.current,
          { opacity: 0, ease: "power1", duration: 1 },
          "-=.75"
        )
        .to(
          waveTwoRef.current,
          { opacity: 1, ease: "power1", duration: 1 },
          "-=.75"
        );

      ScrollTrigger.create({
        pin: false,
        trigger: bannerRef.current,
        start: "top 50%",
        end: "bottom +=900px",
        scrub: 3,
        animation: tl
      });
    },
    { scope: bannerRef, dependencies: [bannerRef, waveOneRef, waveTwoRef] }
  );

  return (
    <BannerWrapper {...props} ref={bannerRef}>
      <Box className="banner_upper">
        <Container fixed>
          <Box className="banner_text_wrapper">
            <Button className="dropdown_btn" onClick={scrollToSection}>
              <DropDownIcon
                IconColor={primaryColors?.primary}
                IconWidth="24"
                IconHeight="24"
              />
            </Button>
            <Grid
              container
              columnSpacing={{ md: 3, xs: 0 }}
              rowSpacing={{ md: 0, xs: 2 }}
            >
              <Grid item md={6} xs={12} className="banner_txt_grid">
                <Box className="banner_text">
                  <Typography variant="h1">
                    <Typography variant="caption" className="font_60">
                      the
                    </Typography>{" "}
                    <Typography variant="caption" className="font_97 no_block">
                      Cost
                    </Typography>
                    <Typography variant="caption" className="font_40">
                      of
                    </Typography>
                    <Typography variant="caption" className="font_97">
                      Data
                    </Typography>
                    Breach
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} xs={12} className="banner_image_grid">
                <Box className="banner_fig">
                  <video
                    width="100%"
                    height="100%"
                    controls={false}
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src={assest?.banner_video} type="video/mp4" />
                    <source src={assest?.banner_video} type="video/ogg" />
                  </video>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className="wave_img_wrapper">
        <img
          src={assest?.wave1}
          alt=""
          className="wave_img1"
          ref={waveOneRef}
        />
        <img
          src={assest?.wave2}
          alt=""
          className="wave_img2"
          ref={waveTwoRef}
        />
      </Box>
    </BannerWrapper>
  );
};

export default Banner;
