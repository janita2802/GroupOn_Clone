import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Chevron Up for expanded state

function QuickLinks() {
  const [treatYourselfOpen, setTreatYourselfOpen] = useState(false);
  const [thingsToDoOpen, setThingsToDoOpen] = useState(false);
  const [couponsOpen, setCouponsOpen] = useState(false);
  const [giftsOpen, setGiftsOpen] = useState(false);

  const toggleTreatYourself = () => setTreatYourselfOpen(!treatYourselfOpen);
  const toggleThingsToDo = () => setThingsToDoOpen(!thingsToDoOpen);
  const toggleCoupons = () => setCouponsOpen(!couponsOpen);
  const toggleGifts = () => setGiftsOpen(!giftsOpen);

  return (
    <Box p={4}>
      {/* Treat Yourself Section */}
      <Box mb={4}>
        <Flex
          justify="space-between"
          align="center"
          fontWeight="bold"
          color="gray.800"
          onClick={toggleTreatYourself}
          cursor="pointer"
        >
          <Text>Treat Yourself</Text>
          <Icon as={treatYourselfOpen ? FaChevronUp : FaChevronDown} />
        </Flex>
        {treatYourselfOpen && (
          <UnorderedList
            ml={4}
            mt={2}
            marginLeft={0}
            color="gray.600"
            styleType="none"
          >
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Eyelash Extensions
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Facials
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Fitness Classes
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Hair Salons
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Liposuction
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Massages
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Nail Salons
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Spas
              </Link>
            </ListItem>
          </UnorderedList>
        )}
      </Box>

      {/* Things To Do Section */}
      <Box mb={4}>
        <Flex
          justify="space-between"
          align="center"
          fontWeight="bold"
          color="gray.800"
          onClick={toggleThingsToDo}
          cursor="pointer"
        >
          <Text>Things To Do</Text>
          <Icon as={thingsToDoOpen ? FaChevronUp : FaChevronDown} />
        </Flex>
        {thingsToDoOpen && (
          <UnorderedList
            ml={4}
            mt={2}
            color="gray.600"
            marginLeft={0}
            styleType="none"
          >
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Arcade
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Auto Detailing
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Bars
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Bowling
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Escape Rooms
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Food Near Me
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Kids Activities
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Oil Change
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Restaurants
              </Link>
            </ListItem>
          </UnorderedList>
        )}
      </Box>

      {/* Coupons Section */}
      <Box mb={4}>
        <Flex
          justify="space-between"
          align="center"
          fontWeight="bold"
          color="gray.800"
          onClick={toggleCoupons}
          cursor="pointer"
        >
          <Text>Coupons</Text>
          <Icon as={couponsOpen ? FaChevronUp : FaChevronDown} />
        </Flex>
        {couponsOpen && (
          <UnorderedList
            ml={4}
            mt={2}
            color="gray.600"
            marginLeft={0}
            styleType="none"
          >
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Coupon Codes by Brand
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Exclusive Offers
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Coupon Codes by Category
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Seasonal Coupon Codes
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Coupons Blog
              </Link>
            </ListItem>
          </UnorderedList>
        )}
      </Box>

      {/* Gifts for Occasions Section */}
      <Box mb={4}>
        <Flex
          justify="space-between"
          align="center"
          fontWeight="bold"
          color="gray.800"
          onClick={toggleGifts}
          cursor="pointer"
        >
          <Text>Gifts for Occasions</Text>
          <Icon as={giftsOpen ? FaChevronUp : FaChevronDown} />
        </Flex>
        {giftsOpen && (
          <UnorderedList
            ml={4}
            mt={2}
            color="gray.600"
            marginLeft={0}
            styleType="none"
          >
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Valentine's Day Gifts
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Mother's Day Gifts
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Father's Day Gifts
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Birthday Gifts
              </Link>
            </ListItem>
            <ListItem mb={1}>
              <Link href="#" color="gray.700">
                Gift Cards
              </Link>
            </ListItem>
          </UnorderedList>
        )}
      </Box>
    </Box>
  );
}

export default QuickLinks;
