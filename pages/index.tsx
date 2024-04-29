// import BreachesSec from "@/components/BreachesSec/BreachesSec";
import Attraction from "@/components/Attraction/Attraction";
import Winner from "@/components/Winner/Winner";

// import TimeLineSec from "@/components/TimeLineSec/TimeLineSec";

import Wrapper from "@/layout/wrapper/Wrapper";

// const TimeLineSec = dynamic(
//   () => import("@/components/TimeLineSec/TimeLineSec"),
//   { ssr: false }
// );
// const TimelinegraphSec = dynamic(
//   () => import("@/components/TimelinegraphSec/TimelinegraphSec"),
//   { ssr: false }
// );

// const Banner = dynamic(() => import("@/components/Banner/Banner"), {
//   ssr: false
// });

// const CybersecuritySec = dynamic(
//   () => import("@/components/CybersecuritySec/CybersecuritySec"),
//   { ssr: false }
// );

// const BreachesSec = dynamic(
//   () => import("@/components/BreachesSec/BreachesSec"),
//   { ssr: false }
// );

export default function Home() {
  // const scrollToRef = useRef<HTMLDivElement>(null);

  // const scrollToSection = () => {
  //   if (scrollToRef.current) {
  //     scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const [scroll, setScroll] = useState(false);

  // const scrollRefresh = (data: boolean) => {
  //   setScroll(data);
  // };

  return (
    <Wrapper>
      {/* <Banner scrollToSection={scrollToSection} /> */}
      <Attraction />
      <Winner />
    </Wrapper>
  );
}
