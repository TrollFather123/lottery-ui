import assest from "@/json/assest";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const ImageSecWrapper = styled(Box)`
  padding: 150px 0;
  figure {
    img {
      width: 100%;
    }
  }
`;

const ImageSec = () => {
  return (
    <ImageSecWrapper>
      <Container fixed>
        <figure>
          <img src={assest?.image} alt="" />
        </figure>
      </Container>
    </ImageSecWrapper>
  );
};

export default ImageSec;
