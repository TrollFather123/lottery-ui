import { primaryColors } from "@/themes/_muiPalette";
import TimelineIcon from "@/ui/Icons/TimelineIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useState } from "react";
import { integer_to_roman } from "../TimeLineSec/TimeLineSec";

export const TimelinegraphSecWrapper = styled(Box)`
  .time_list {
    display: flex;

    margin: -10px 0 0;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${primaryColors.borderprimary};
    }
    li {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      padding: 15px 12px 0;
      min-width: 130px;

      &::after {
        top: 0;
        left: 12px;
        position: absolute;
        content: "";
        background-color: ${primaryColors.primary1};
        height: 4px;
        width: 25px;
      }
      h5 {
        font-size: 16px;
        font-family: "Roboto";
        font-weight: 700;
      }
      p {
        margin-bottom: auto;
        line-height: 1.1;
      }
      span {
        display: inline-block;
        margin-top: 34px;
      }
    }
  }
  .top_time {
    border-left: 2px solid ${primaryColors.primary};
    border-right: 2px solid ${primaryColors.primary};
    .wrapper {
      @media (max-width: 1199px) {
        overflow-x: auto;
      }
    }
  }
`;

const timelineData = [
  {
    date: "Sep 28",
    text: "Breach occurred"
  },
  {
    date: "Oct 2",
    text: "BeyondTrust detected and remediated"
  },
  {
    date: "Oct 3",
    text: "BeyondTrust asked Okta support to escalate issue"
  },
  {
    date: "Oct 11 & 13",
    text: "BeyondTrust held Zoom sessions with Okta security"
  },
  {
    date: "Oct 19",
    text: "Okta security leadership confirmed internal breach"
  },
  {
    date: "Oct 20",
    text: "Okta publicly acknowledged the breach via a blog post"
  },
  {
    date: "Nov 29",
    text: "Okta filed Form 8-K with the SEC"
  },
  {
    date: "Nov 29",
    text: "This is sample text to test the amount of space."
  }
];

export default function TimelinegraphSec() {
  const [elem, setElem] = useState<any>(null);
  const [totalPaths, setTotalPaths] = useState<number>(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const element = document.querySelector(".wrapper svg");
    const paths = document.querySelectorAll(".wrapper svg path");

    if (element) {
      setElem(element);
    }
    if (paths) {
      setTotalPaths(paths.length);
    }
  }, []);

  const draw = useCallback(() => {
    if (elem) {
      elem.classList.add("active");
    }
  }, [elem]);

  const erase = useCallback(() => {
    if (elem) {
      elem.classList.remove("active");
    }
  }, [elem]);

  useEffect(() => {
    if (flag && totalPaths) {
      draw();
      setTimeout(() => {
        erase();
        setFlag(false);
      }, Math.floor((totalPaths / 2) * 50));
    } else {
      erase();
      setTimeout(() => {
        draw();
        setFlag(true);
      }, Math.floor((totalPaths / 2) * 50));
    }
  }, [flag, totalPaths]);

  return (
    <TimelinegraphSecWrapper>
      <Container fixed>
        <Box className="top_time">
          <TimelineIcon className="wrapper" />
          <List disablePadding className="time_list">
            {timelineData.map((data, index) => (
              <ListItem disablePadding>
                <Typography variant="h5">{data.date}</Typography>
                <Typography variant="body1">{data.text}</Typography>
                <Typography variant="caption">
                  {integer_to_roman(index + 1)}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </TimelinegraphSecWrapper>
  );
}
