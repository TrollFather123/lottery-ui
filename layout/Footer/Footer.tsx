/* eslint-disable react/no-array-index-key */

import assest from "@/json/assest";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import FbIcon from "@/ui/Icons/FbIcon";
import InstaIcon from "@/ui/Icons/InstaIcon";
import TelegramIcon from "@/ui/Icons/TelegramIcon";
import TwitterIcon from "@/ui/Icons/TwitterIcon";
import WhatsAppIcon from "@/ui/Icons/WhatsAppIcon";
import { List, ListItem } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const ftrIconList = [
  {
    icon: <FbIcon />
  },
  {
    icon: <InstaIcon />
  },
  {
    icon: <TwitterIcon />
  },
  {
    icon: <TelegramIcon />
  },
  {
    icon: <WhatsAppIcon />
  }
];

const quickLinkList = [
  {
    name: "About us",
    link: "/about-us"
  },
  {
    name: "contact us",
    link: "/contact-us"
  }
];

const helpLinkList = [
  {
    name: "FAQs",
    link: "/faq"
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy"
  },
  {
    name: "Terms of use",
    link: "terms-condition"
  }
];

const govermentList = [
  {
    name: "The lotteries (regulation) Rules, 2010",
    link: "/rules-regulation"
  },
  {
    name: "Mizoram claim form Goa claim form",
    link: "goa-claim"
  }
];

const Footer = () => {
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr-wrapper">
          <Box className="ftr_upper">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Box className="ftr_logo">
                  <Link href="/">
                    <Image
                      src={assest?.ftr_logo}
                      alt="logo image"
                      width={278}
                      height={65}
                    />
                  </Link>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur. Convallis libero
                    enim accumsan
                  </Typography>
                  <List disablePadding>
                    {ftrIconList?.map((data, index) => (
                      <ListItem disablePadding key={index}>
                        <Link href="/">{data?.icon}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={2.5}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_head">
                    Quick links
                  </Typography>
                  <List disablePadding>
                    {quickLinkList?.map((data, index) => (
                      <ListItem disablePadding key={index}>
                        <Link href={data?.link}>{data?.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={2.5}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_head">
                    Help
                  </Typography>
                  <List disablePadding>
                    {helpLinkList?.map((data, index) => (
                      <ListItem disablePadding key={index}>
                        <Link href={data?.link}>{data?.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Box className="ftr_content">
                  <Typography variant="body1" className="ftr_head">
                    GOVT Policy
                  </Typography>
                  <List disablePadding>
                    {govermentList?.map((data, index) => (
                      <ListItem disablePadding key={index}>
                        <Link href={data?.link}>{data?.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="ftr_btm">
            <Typography>
              © 2024 Skill <Link href="/">Lotto Solutions Pvt. Ltd.</Link> All
              Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
