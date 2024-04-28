import styled from "@emotion/styled";

import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import RightArrowIcon from "@/ui/Icons/RightArrowIcon";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { List } from "@mui/material";

const FooterWrap = styled(Box)`
  background-color: ${primaryColors?.textPrimaryColor};
  .ftr_upper {
    padding: 75px 0 110px;
  }
  .ftr-wrapper {
    padding: 0 60px;
    @media (max-width: 899px) {
      padding: 0;
    }
    h2 {
      max-width: 582px;
      font-size: 60px;
      @media (max-width: 899px) {
        font-size: 37px;
      }
    }
  }
  .ftr_para {
    margin-bottom: 45px;
  }
  .ftr_logo {
    line-height: 0;
    @media (max-width: 899px) {
      margin-bottom: 90px;
    }
    a {
      line-height: 0;
    }
  }
  .ftr_btm {
    margin-top: 90px;
    @media (max-width: 899px) {
      margin-top: 35px;
    }
  }
  .ftr_content {
    padding-left: 70px;
    @media (max-width: 899px) {
      padding-left: 0px;
    }
    button {
      @media (max-width: 899px) {
        min-width: 100%;
        span {
          margin-right: auto;
        }
      }
    }
    p {
      @media (max-width: 899px) {
        br {
          display: none;
        }
      }
    }
  }
`;

const Footer = () => {
  const router = useRouter();
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr-wrapper">
          <Box className="ftr_upper">
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12} md={6} lg={3}>
                <Box className="ftr_logo">
                  <Link href="/">
                    <Image
                      src={assest?.logo_img}
                      alt="logo image"
                      width={278}
                      height={65}
                    />
                  </Link>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur. Convallis libero
                    enim accumsan
                  </Typography>
                  <List disablePadding></List>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_para">
                    Ready to get started? Click the link to <br /> schedule a
                    free consultation with one of <br /> our SEC experts now.
                  </Typography>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("https://calendly.com/")}
                  >
                    <Typography variant="caption">
                      Schedule a Meeting
                    </Typography>
                    <RightArrowIcon />
                  </CustomButtonPrimary>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_para">
                    Ready to get started? Click the link to <br /> schedule a
                    free consultation with one of <br /> our SEC experts now.
                  </Typography>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("https://calendly.com/")}
                  >
                    <Typography variant="caption">
                      Schedule a Meeting
                    </Typography>
                    <RightArrowIcon />
                  </CustomButtonPrimary>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_para">
                    Ready to get started? Click the link to <br /> schedule a
                    free consultation with one of <br /> our SEC experts now.
                  </Typography>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("https://calendly.com/")}
                  >
                    <Typography variant="caption">
                      Schedule a Meeting
                    </Typography>
                    <RightArrowIcon />
                  </CustomButtonPrimary>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="ftr_btm">
            © 2024 Skill <Link href="/">Lotto Solutions Pvt. Ltd.</Link> All
            Rights Reserved.
          </Box>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
