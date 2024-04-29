import { primaryColors } from "@/themes/_muiPalette";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";

export const CommonHeadingWrapper = styled(Box)`
  .sec_head {
    margin-bottom: 45px;
    text-align: center;
    h2 {
      font-size: 40px;
      font-weight: 700;
      color: ${primaryColors.color252525};
      text-transform: capitalize;
    }
  }
`;

interface commonheadingprops {
  title: string;
}

export default function CommonHeading({ title }: commonheadingprops) {
  return (
    <CommonHeadingWrapper>
      <Container fixed>
        <Box className="sec_head">
          <Typography variant="h2">{title}</Typography>
        </Box>
      </Container>
    </CommonHeadingWrapper>
  );
}
