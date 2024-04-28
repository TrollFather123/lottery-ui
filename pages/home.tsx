// import BreachesSec from "@/components/BreachesSec/BreachesSec";
import ImageSec from "@/components/ImageSec/ImageSec";
import ImpactSec from "@/components/ImpactSec/ImpactSec";
import LearnSec from "@/components/LearnSec/LearnSec";
import SubscribeSec from "@/components/SubscribeSec/SubscribeSec";

import UncoverSec from "@/components/UncoverSec/UncoverSec";
// import TimeLineSec from "@/components/TimeLineSec/TimeLineSec";

import Wrapper from "@/layout/wrapper/Wrapper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const TimeLineSec = dynamic(
  () => import("@/components/TimeLineSec/TimeLineSec"),
  { ssr: false }
);
const TimelinegraphSec = dynamic(
  () => import("@/components/TimelinegraphSec/TimelinegraphSec"),
  { ssr: false }
);

const Banner = dynamic(() => import("@/components/Banner/Banner"), {
  ssr: false
});

const CybersecuritySec = dynamic(
  () => import("@/components/CybersecuritySec/CybersecuritySec"),
  { ssr: false }
);

const BreachesSec = dynamic(
  () => import("@/components/BreachesSec/BreachesSec"),
  { ssr: false }
);

export default function Home() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [scroll, setScroll] = useState(false);

  const scrollRefresh = (data: boolean) => {
    setScroll(data);
  };

  return (
    <Wrapper>
      <Banner scrollToSection={scrollToSection} />
      <Box ref={scrollToRef} id="section1">
        <UncoverSec
          title="Uncover the Real Impact"
          subTitle="Meet Your Expert in Cybersecurity Intelligence"
        >
          <Typography>
            Welcome to the forefront of cybersecurity awareness. Unlock a wealth
            of knowledge tailored to help you understand, respond to, and
            mitigate the risks in today’s digital landscape.
          </Typography>
          <Typography>
            Our state-of-the-art chatbot is your gateway to real-time data on
            recent hacks, providing a detailed analysis of SEC regulations and
            comprehensive breakdowns of the costs and impacts of cyber
            incidents.
          </Typography>
          <Typography>
            Embark on an engaging exploration through featured hacks and
            insightful infographics. Discover the intricate dynamics of
            cybersecurity incidents and their far-reaching impacts.
          </Typography>
        </UncoverSec>
      </Box>
      <CybersecuritySec
        title="Cybersecurity Assistant"
        subTitle="Use any prompts in our state-of-the-art chatbot designed to deliver real-time data and insights on recent hacks."
      />
      <BreachesSec
        title="Recent Breaches"
        subTitle="Select a company below to see how a recent data breach has impacted their business."
        scrollRefresh={scrollRefresh}
      />
      <TimelinegraphSec />
      <TimeLineSec scroll={scroll} />
      <ImpactSec />
      <LearnSec />
      <ImageSec />
      <SubscribeSec />
    </Wrapper>
  );
}
