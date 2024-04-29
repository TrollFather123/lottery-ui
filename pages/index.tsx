import Attraction from "@/components/Attraction/Attraction";
import Banner from "@/components/Banner/Banner";
import DrawSec from "@/components/DrawSec/DrawSec";
import Winner from "@/components/Winner/Winner";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <Attraction />
      <DrawSec />
      <Winner />
    </Wrapper>
  );
}
