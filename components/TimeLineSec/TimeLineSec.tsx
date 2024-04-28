/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import { useGSAP, useGSAPConfig } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { primaryColors } from "@/themes/_muiPalette";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function integer_to_roman(num: number): string | false {
  if (typeof num !== "number") return false;

  const digits = String(+num).split("");
  const key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX"
  ];
  let roman_num = "";
  let i = 3;
  while (i--) {
    const digit = digits.pop();
    roman_num = (key[+digit! + i * 10] || "") + roman_num;
  }
  return Array(+digits.join("") + 1).join("M") + roman_num;
}

const timelineData = [
  {
    date: "September 28, 2023",
    text: "The breach occurred between this date and October 1, 2023."
  },
  {
    date: "October 2, 2023",
    text: " BeyondTrust detected and remediated an identity-centric attack on an in-house Okta administrator account and alerted Okta."
  },
  {
    date: "October 3, 2023",
    text: "BeyondTrust asked Okta support to escalate the issue to the Okta security team due to initial forensics pointing to a breach."
  },
  {
    date: "October 11 and 13, 2023 ",
    text: "BeyondTrust held Zoom sessions with the Okta security team to explain why they believed Okta might be compromised."
  },
  {
    date: "October 19, 2023",
    text: " Okta security leadership confirmed they had an internal breach, and BeyondTrust was one of their affected customers."
  },
  {
    date: "October 20, 2023",
    text: "Okta publicly acknowledged the breach via a blog post."
  },
  {
    date: "November 29, 2023",
    text: "Okta filed a Form 8-K with the Securities and Exchange Commission (SEC) in relation to the data breach Reported Financial"
  }
];

export const TimelineWrapper = styled(Box)`
  border-top: 2px solid ${primaryColors.primary};

  .timeline_box {
    display: flex;
    margin-bottom: 10px;

    .time_rgt {
      width: calc(100% - 50px);
      margin-left: 65px;
      padding-bottom: 10px;
      border-bottom: 1px solid ${primaryColors.primary1};
      @media (max-width: 899px) {
        margin-left: 38px;
      }
      h5 {
        font-size: 16px;
        font-weight: 700;
        font-family: "Roboto";
        margin-bottom: 3px;
      }
      p {
        font-size: 16px;
        font-weight: 400;
        @media (max-width: 899px) {
          font-size: 14px;
        }
      }
    }
  }
  .time_outr {
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
  .time_lft {
    min-width: 50px;
    @media (max-width: 899px) {
      padding-left: 50px;
    }
    p {
      @media (max-width: 899px) {
        font-size: 14px;
      }
    }
  }
`;

interface props extends BoxProps {
  scroll: boolean;
}

const TimeLineSec: React.FC<props & BoxProps> = ({ scroll, ...props }) => {
  const main = useRef<HTMLDivElement>(null);

  const config: useGSAPConfig | any = {
    trigger: main,
    startOnMount: true
  };

  useGSAP(() => {
    const logos = gsap.utils.toArray(".timeline_box");

    const tl = gsap.timeline();

    tl.from(logos, {
      duration: 2,
      x: 1000,
      scale: 1,
      opacity: 0,
      ease: "power1",
      stagger: 2,
      delay: (index) => index * 0.5
    });

    ScrollTrigger.create({
      trigger: main.current!,
      start: "top 50%",
      end: "bottom 50%",
      scrub: 4,
      animation: tl
    });
  }, config);

  useEffect(() => {
    if (scroll) {
      ScrollTrigger.refresh();
    }
  }, [scroll]);

  return (
    <TimelineWrapper {...props}>
      <Container fixed>
        <Box className="time_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={2.5}>
              <Typography variant="h4">Timeline:</Typography>
            </Grid>
            <Grid item xs={12} md={9.5}>
              <Box ref={main}>
                {timelineData.map((item, index) => (
                  <Box className="timeline_box">
                    <Box className="time_lft">
                      <Typography variant="body1">
                        {integer_to_roman(index + 1)}
                      </Typography>
                    </Box>
                    <Box className="time_rgt">
                      <Typography variant="h5">{item.date}</Typography>
                      <Typography variant="body1">{item.text}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </TimelineWrapper>
  );
};

export default TimeLineSec;
