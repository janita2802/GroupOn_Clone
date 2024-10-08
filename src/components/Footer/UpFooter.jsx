import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Chevron Up and Down icons

function PopularIn() {
  const [showCategories, setShowCategories] = useState(true); // Categories are shown by default
  const [activeTab, setActiveTab] = useState("Popular Things Nearby"); // Default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowCategories(true); // Always show categories when switching tabs
  };

  const handleHideCategories = () => {
    setShowCategories(!showCategories); // Toggle categories visibility
  };

  return (
    <Box p={8} w="full" position={"relative"}>
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={4}>
        <Box mb={2}>
          <Text fontSize="2xl" fontWeight="semibold">
            Popular on Groupon
          </Text>
          <Text color="gray.600">
            Groupon is your place for savings and discovery while exploring fun
            activities in your city and around the country.
          </Text>
        </Box>
        <Box
          as="button"
          onClick={handleHideCategories}
          px={4}
          py={2}
          border="1px"
          borderRadius="full"
          borderColor="gray.300"
          color="gray.600"
          display="flex"
          alignItems="center"
        >
          <Icon
            as={showCategories ? FaChevronUp : FaChevronDown}
            fontSize="1.2rem"
            mr={2}
          />
          <Text>{showCategories ? "Hide categories" : "Show categories"}</Text>
        </Box>
      </Flex>

      {/* Conditionally render tabs and content only if showCategories is true */}
      {showCategories && (
        <>
          {/* Tabs Section */}
          <Flex mb={4}>
            {[
              "Popular Things Nearby",
              "Browse by City",
              "Coupons & Promo Codes",
            ].map((tab) => (
              <Box
                key={tab}
                as="button"
                onClick={() => handleTabClick(tab)}
                px={4}
                py={2}
                borderBottom={activeTab === tab ? "2px solid black" : "none"}
                color={activeTab === tab ? "black" : "gray.600"}
                cursor="pointer"
                fontWeight={activeTab === tab ? "bold" : "normal"}
                transition="border-color 0.2s"
              >
                {tab}
              </Box>
            ))}
          </Flex>

          {/* Show content for the active tab when categories are visible */}
          <Flex flexWrap="wrap" gap={10}>
            {/* Popular Things Nearby Section */}
            {activeTab === "Popular Things Nearby" && (
              <>
                <Box flex="1" minWidth="200px">
                  <Text
                    fontWeight="semibold"
                    mb={2}
                    cursor="pointer"
                    fontSize="xl"
                  >
                    Popular Things Nearby
                  </Text>
                  <UnorderedList spacing={1} marginLeft={0}>
                    {[
                      "Beauty & Spas",
                      "Massages",
                      "Laser Hair Removal",
                      "Nail Salons",
                      "Botox Injections",
                      "Tattoo Parlors",
                      "Salons",
                      "Barber Shops",
                      "Hair Salons",
                      "Spas",
                      "Facials",
                      "Waxing",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{ listStyleType: "none" }}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                {/* Food & Drink Section */}
                <Box flex="1" minWidth="200px">
                  <Text
                    fontWeight="semibold"
                    mb={2}
                    cursor="pointer"
                    fontSize="xl"
                  >
                    Food & Drink
                  </Text>
                  <UnorderedList spacing={1}>
                    {[
                      "All Restaurants",
                      "American",
                      "Bars & Pubs",
                      "Chinese",
                      "Indian",
                      "Italian",
                      "Mexican",
                      "Pizza",
                      "Steakhouses",
                      "Sushi",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{ listStyleType: "none" }}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                {/* Things To Do Section */}
                <Box flex="1" minWidth="200px">
                  <Text
                    fontWeight="semibold"
                    mb={2}
                    cursor="pointer"
                    fontSize="xl"
                  >
                    Things To Do
                  </Text>
                  <UnorderedList spacing={1}>
                    {[
                      "All Things to Do",
                      "Amusement Parks",
                      "Arcades",
                      "Bowling",
                      "Escape Rooms",
                      "Kids Activities",
                      "Mini Golf",
                      "Museums",
                      "Trampoline Parks",
                      "Zoos",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{ listStyleType: "none" }}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>

                {/* Health & Fitness Section */}
                <Box flex="1" minWidth="200px">
                  <Text
                    fontWeight="semibold"
                    mb={2}
                    cursor="pointer"
                    fontSize="xl"
                  >
                    Health & Fitness
                  </Text>
                  <UnorderedList spacing={1}>
                    {[
                      "Chiropractors",
                      "Dance Classes",
                      "Dental Checkups",
                      "Dermatologist",
                      "Fitness Classes",
                      "Golf Course",
                      "Personal Trainers",
                      "Yoga Classes",
                    ].map((item) => (
                      <ListItem
                        key={item}
                        sx={{ listStyleType: "none" }}
                        _hover={{ textDecoration: "underline" }}
                      >
                        {item}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}

            {/* Browse by City Section */}
            {activeTab === "Browse by City" && (
              <Box flex="1" minWidth="200px">
                <Text
                  fontWeight="semibold"
                  mb={2}
                  cursor="pointer"
                  fontSize="xl"
                >
                  Browse by City
                </Text>
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(5, 1fr)"
                  gap={2}
                >
                  {[
                    "Atlanta",
                    "Austin",
                    "Baltimore",
                    "Boston",
                    "Calgary",
                    "Charleston",
                    "Charlotte",
                    "Chicago",
                    "Dallas",
                    "Denver",
                    "Edmonton",
                    "Houston",
                    "Las Vegas",
                    "Los Angeles",
                    "Miami",
                    "New York City",
                    "Orlando",
                    "Ottawa",
                    "Philadelphia",
                    "Phoenix",
                    "Portland",
                    "San Antonio",
                    "San Diego",
                    "San Francisco",
                    "San Jose",
                    "Seattle",
                    "Tampa",
                    "Toronto",
                    "Vancouver",
                    "Washington D.C.",
                  ].map((city) => (
                    <Text
                      key={city}
                      as="span"
                      sx={{ listStyleType: "none" }}
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {city}
                    </Text>
                  ))}
                </Box>
              </Box>
            )}

            {/* Coupons & Promo Codes Section */}
            {activeTab === "Coupons & Promo Codes" && (
              <Box flex="1" minWidth="200px">
                <Text
                  fontWeight="semibold"
                  mb={2}
                  cursor="pointer"
                  fontSize="xl"
                >
                  Coupons & Promo Codes
                </Text>
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(5, 1fr)"
                  gap={2}
                >
                  {[
                    "1-800-Flowers Coupons",
                    "Adidas Promo Codes",
                    "Amazon Promo Codes",
                    "American Eagle Promo Codes",
                    "Ancestry DNA Coupons",
                    "ASOS Promo Codes",
                    "Bed Bath & Beyond Coupons",
                    "Boohoo Promo Codes",
                    "eBay Coupons",
                    "Edible Arrangements Coupons",
                    "Forever 21 Coupons",
                    "H&R Block Coupons",
                    "Home Depot Coupons",
                    "Kohl's Coupons",
                    "L.L.Bean Coupons",
                    "Lowe's Coupons",
                    "Macy's Coupons",
                    "Michaels Coupons",
                    "Old Navy Coupons",
                    "Quickbooks Coupons",
                    "Samsung Coupons",
                    "Sephora Coupons",
                    "Target Coupons",
                    "The North Face Coupons",
                    "Ulta Coupons",
                    "Walgreens Coupons",
                    "Wayfair Coupons",
                  ].map((code) => (
                    <Text
                      key={code}
                      as="span"
                      sx={{ listStyleType: "none" }}
                      _hover={{
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      {code}
                    </Text>
                  ))}
                </Box>
              </Box>
            )}
          </Flex>
        </>
      )}
    </Box>
  );
}

export default PopularIn;
