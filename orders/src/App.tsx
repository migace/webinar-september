import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Fragment } from "react";

import { Airbnb } from "./components/Airbnb";

const homes = [
  {
    id: 1,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: 2,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 4,
    baths: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$2,300.00",
    reviewCount: 68,
    rating: 5,
  },
  {
    id: 3,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 1,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,100.00",
    reviewCount: 50,
    rating: 3,
  },
  {
    id: 4,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  },
  {
    id: 5,
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,750.00",
    reviewCount: 12,
    rating: 4,
  },
];

export const App = () => (
    <Flex maxW="1024px" m="0 auto" p={12} justifyContent="center">
  <Grid
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
  >
    {homes.map((home) => (
      <Fragment key={home.id}>
        {home.id === 1 ? (
          <GridItem rowSpan={2} colSpan={1}>
              <Flex h="100%" alignItems="center">
            <Airbnb key={home.id} property={home} />
            </Flex>
          </GridItem>
        ) : (
          <GridItem colSpan={2}>
            <Airbnb key={home.id} property={home} />
          </GridItem>
        )}
      </Fragment>
    ))}
  </Grid>
  </Flex>
);
