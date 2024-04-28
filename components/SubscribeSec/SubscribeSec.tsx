import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const SubscribeSecWrapper = styled(Box)`
  padding: 100px 0;
  /* border-top: 2px solid ${primaryColors.primary}; */
  border-bottom: 2px solid ${primaryColors.primary};
  @media (max-width: 899px) {
    padding: 65px 0;
  }
  .sub_lft {
    h4 {
      font-weight: 400;
      @media (max-width: 899px) {
        margin-bottom: 30px;
      }
    }
  }
  .sub_rgt {
    padding-left: 110px;
    @media (max-width: 1199px) {
      padding-left: 40px;
    }
    @media (max-width: 899px) {
      padding-left: 00px;
    }

    p {
      font-size: 22px;
      font-family: "Roboto";
    }
    .MuiInputBase-root {
      @media (max-width: 899px) {
        min-width: 100%;
      }
    }
  }
`;

export default function SubscribeSec() {
  return (
    <SubscribeSecWrapper>
      <Container fixed>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box className="sub_lft">
              <Typography variant="h4">
                Subscribe to be alerted to the latest hacks.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="sub_rgt">
              <Typography variant="body1">Email</Typography>
              <InputFieldCommon placeholder="Email Address" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </SubscribeSecWrapper>
  );
}
