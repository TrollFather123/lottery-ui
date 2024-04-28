/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { galleryList } from "@/json/mock/galleryList.mock";
import {
  BreachEachContent,
  BreachGallery,
  BreachesSecWrapper,
  DetailsSec,
  GalleryItemDetailsWrapper
} from "@/styles/StyledComponents/BreachesSecWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import UpArrowIcon from "@/ui/Icons/UpArrowIcon";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import React, { useRef, useState } from "react";

//

interface galleryProps extends BoxProps {
  icon: string;
  date: string;
  indexNumber: number;
  getIndex?: (data: number) => void;
  scrollInto?: () => void;
}

const BreachGalleryItems: React.FC<galleryProps & BoxProps> = ({
  icon,
  date,
  indexNumber,
  getIndex,
  scrollInto,
  ...props
}) => {
  return (
    <BreachEachContent
      {...props}
      className={indexNumber <= 3 ? "no_top_border" : "no_bottom_border"}
    >
      <Box className="number_block">
        <Typography variant="h6">0{indexNumber + 1}</Typography>
      </Box>
      <Button
        className="company_logo"
        onClick={() => {
          if (getIndex !== undefined) {
            getIndex(indexNumber);
            if (scrollInto !== undefined) {
              scrollInto();
            }
          }
        }}
      >
        <img src={icon} alt="icons" />
      </Button>
      <Box className="number_block top_border">
        <Typography variant="h6">{date}</Typography>
      </Box>
    </BreachEachContent>
  );
};

interface itemsProps extends BoxProps, galleryProps {
  companyName: string;
  industry: string;
  sector: string;
}

const GalleryItemDetails: React.FC<itemsProps & BoxProps> = ({ ...props }) => {
  return (
    <GalleryItemDetailsWrapper id={`id${props?.indexNumber}`} {...props}>
      <Stack direction="row" flexWrap="wrap" className="details_block_upper">
        <Box className="card_block">
          <BreachGalleryItems
            icon={props?.icon}
            date={props?.date}
            indexNumber={props?.indexNumber}
          />
        </Box>
        <Box className="details">
          <List disablePadding>
            <ListItem disablePadding>
              <Typography variant="h5">Name of the Company:</Typography>
              <Typography>{props?.companyName}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="h5">Industry:</Typography>
              <Typography>{props?.industry}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="h5">Sector:</Typography>
              <Typography>{props?.sector}</Typography>
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Stack direction="row" flexWrap="wrap" className="details_block_btm">
        <Box className="details_title">
          <Typography variant="h5">Breach Summary:</Typography>
        </Box>
        <Box className="details_content">{props?.children}</Box>
      </Stack>
    </GalleryItemDetailsWrapper>
  );
};

interface props extends BoxProps {
  title: string;
  subTitle: string;
  scrollRefresh: (data: boolean) => void;
}

const BreachesSec: React.FC<props & BoxProps> = ({
  title,
  subTitle,
  scrollRefresh,
  ...props
}) => {
  const [detailsIndex, setDetailsIndex] = useState<number>(0);

  const getIndex = (data: number) => {
    setDetailsIndex(data);
  };

  const secRef = useRef<HTMLDivElement>(null);

  const scrollInto = () => {
    if (secRef.current) {
      secRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
      scrollRefresh(true);
    }
  };

  const backSecRef = useRef<HTMLDivElement>(null);

  const backScrollInto = () => {
    if (backSecRef.current) {
      backSecRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <BreachesSecWrapper {...props}>
      <Container fixed>
        <Box className="breach_title">
          <Typography variant="h3">{title}</Typography>
          <Typography>{subTitle}</Typography>
        </Box>
      </Container>
      <Box className="breach_upper_otr" ref={backSecRef}>
        <Container fixed>
          <BreachGallery direction="row" flexWrap="wrap">
            {galleryList?.map((data, index) => (
              <Box className="each_items" key={index}>
                <BreachGalleryItems
                  {...data}
                  indexNumber={index}
                  getIndex={getIndex}
                  scrollInto={scrollInto}
                />
              </Box>
            ))}
          </BreachGallery>
        </Container>
      </Box>
      <Container fixed>
        <Stack className="breach_mdl_otr">
          <Box className="breach_mdl_upper">
            <Button>LOAD MORE</Button>
          </Box>
          <Box className="breach_mdl_btm">
            <Button className="dropdown_btn" onClick={backScrollInto}>
              <UpArrowIcon
                IconColor={primaryColors?.primary}
                IconWidth="16"
                IconHeight="16"
              />
            </Button>
            <Typography variant="h5">Back to List</Typography>
          </Box>
        </Stack>
      </Container>

      <DetailsSec ref={secRef}>
        <Container fixed>
          {galleryList?.map((data: any, index) => (
            <Box className="each_detail" key={index}>
              {detailsIndex === index && (
                <GalleryItemDetails
                  indexNumber={index}
                  companyName={data?.details?.companyName}
                  industry={data?.details?.industry}
                  sector={data?.details?.sector}
                  {...data}
                >
                  <Typography> {data?.details?.content}</Typography>
                </GalleryItemDetails>
              )}
            </Box>
          ))}
        </Container>
      </DetailsSec>
    </BreachesSecWrapper>
  );
};

export default BreachesSec;
