/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { BoxProps } from "@mui/system";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { CybersecuritySecWrapper } from "@/styles/StyledComponents/CybersecuritySecWrapper";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface securityProps extends BoxProps {
  title: string;
  subTitle: string;
}

gsap.registerPlugin(ScrollTrigger);

const CybersecuritySec: React.FC<securityProps & BoxProps> = ({
  title,
  subTitle,
  ...props
}) => {
  const videoRef = useRef<any>(null);
  const triggerSecref = useRef<any>(null);

  const [video, setVideo] = useState<boolean>(true);

  useGSAP(
    () => {
      ScrollTrigger.create({
        pin: false,
        trigger: triggerSecref.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {
          videoRef?.current?.play();
        },
        onLeave: () => {
          setVideo(true);
        },
        onLeaveBack: () => {
          setVideo(true);
        },
        onEnterBack: () => {
          videoRef?.current?.play();
        }
      });
    },
    { scope: videoRef, dependencies: [videoRef] }
  );

  const handleVideoEnd = useCallback(() => {
    setVideo(false);
  }, []);

  type ItextData = {
    text: string;
  };

  const [textList, setTextList] = useState<ItextData[]>([]);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        setTextList([...textList, { text: value }]);
        setValue("");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [value]);

  console.log(value, "value");
  console.log(textList, "textList");

  return (
    <CybersecuritySecWrapper isVideo={video} {...props}>
      <Container fixed>
        <Box className="breach_title">
          <Typography variant="h3">{title}</Typography>
          <Typography>{subTitle}</Typography>
        </Box>
      </Container>
      <Box className="cybr_btm" ref={triggerSecref}>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls={false}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src={assest?.tileVideo} type="video/mp4" />
          <source src={assest?.tileVideo} type="video/ogg" />
        </video>
        <Box className="chat_upr">
          <Container fixed>
            <Box className="chat_sec">
              <Box className="chat_texts">
                <Typography> e.g.</Typography>
                <Typography>
                  “show me the biggest financial impacts in data breaches
                  happening in 2024.”
                </Typography>
                <Typography>
                  “What are the latest SEC cybersecurity compliance
                  requirements?”
                </Typography>
                <Typography>
                  “How did the [specific company name] data breach impact their
                  financials?”
                </Typography>
                <Typography>
                  “What steps can I take to prevent a data breach in my
                  organization?”
                </Typography>

                {textList?.map((data, index) => (
                  <Typography key={index}>{data?.text}</Typography>
                ))}
              </Box>

              <InputFieldCommon
                placeholder="Type your questions here…"
                value={value}
                onChange={(event: any) => setValue(event.target.value)}
                multiline
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </CybersecuritySecWrapper>
  );
};

export default CybersecuritySec;
