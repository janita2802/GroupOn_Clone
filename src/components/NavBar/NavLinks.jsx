import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
import {
  FaSpa,
  FaGift,
  FaHome,
  FaBullseye,
  FaMapMarkerAlt,
  FaUtensils,
  FaBox,
  FaPlane,
  FaTicketAlt,
} from "react-icons/fa";

const NavBarLinks = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [showThingsToDoPopover, setShowThingsToDoPopover] = useState(false);
  const [showGiftsPopover, setShowGiftsPopover] = useState(false);
  const [showHomeAutoPopover, setHomeAutoPopover] = useState(false);
  const [showFoodDrinkPopover, setFoodDrinkPopover] = useState(false);
  const [showLocalPopover, setLocalPopover] = useState(false);
  const [showTravelPopover, setTravelPopover] = useState(false);
  const [showGoodsPopover, setGoodsPopover] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const [showCouponsPopover, setShowCouponsPopover] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  const handleCloseThingsToDoPopover = () => {
    setShowThingsToDoPopover(false);
  };

  const handleCloseGiftsPopover = () => {
    setShowGiftsPopover(false);
  };

  const handleCloseHomeAutoPopover = () => {
    setHomeAutoPopover(false);
  };

  const handleCloseFoodDrinkPopover = () => {
    setFoodDrinkPopover(false);
  };
  const handleCloseLocalPopover = () => {
    setLocalPopover(false);
  };

  const handleCloseTravelPopover = () => {
    setTravelPopover(false);
  };
  const handleCloseGoodsPopover = () => {
    setGoodsPopover(false);
  };

  const handleCloseCouponsPopover = () => {
    setShowCouponsPopover(false);
  };

  return (
    <>
      <Box>
        <Flex justify="center" gap={8} py={2}>
          <Popover
            isOpen={showPopover}
            trigger="click"
            placement="bottom-start" // Align popover to left
            onClose={handleClosePopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setShowPopover(true)}>
                <NavItem
                  icon={FaSpa}
                  label="Beauty & Spas"
                  onClick={() => navigate("/")}
                />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="600px"
              bg="white"
              fontFamily="Arial, sans-serif" // Changed font
              marginTop="14px" // Added margin to push it down
              transform="translateX(-30px)" // Push it slightly to the right
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Beauty & Spas
                  </Text>

                  <Button
                    onClick={handleClosePopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>
                {/* Grid of items as links */}
                <Box className="grid grid-cols-2 gap-4 text-gray-700">
                  <Link href="#" color="gray.700">
                    Massage
                  </Link>
                  <Link href="#" color="gray.700">
                    Health & Fitness
                  </Link>
                  <Link href="#" color="gray.700">
                    Hair Removal
                  </Link>
                  <Link href="#" color="gray.700">
                    Weight Loss
                  </Link>
                  <Link href="#" color="gray.700">
                    Face & Skin Care
                  </Link>
                  <Link href="#" color="gray.700">
                    Nail Salons
                  </Link>
                  <Link href="#" color="gray.700">
                    Cosmetic Procedures
                  </Link>
                  <Link href="#" color="gray.700">
                    Dental
                  </Link>
                  <Link href="#" color="gray.700">
                    Spas
                  </Link>
                  <Link href="#" color="gray.700">
                    Brows & Lashes
                  </Link>
                  <Link href="#" color="gray.700">
                    Hair & Styling
                  </Link>
                  <Link href="#" color="gray.700">
                    Tanning
                  </Link>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* New Popover for Things To Do */}
          <Popover
            isOpen={showThingsToDoPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseThingsToDoPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setShowThingsToDoPopover(true)}>
                <NavItem icon={FaBullseye} label="Things To Do" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="600px"
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Things To Do
                  </Text>
                  <Button
                    onClick={handleCloseThingsToDoPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>
                {/* Grid of items as links */}
                <Box className="grid grid-cols-3 gap-4 text-gray-700">
                  <Link href="#" color="gray.700">
                    Fun & Leisure
                  </Link>
                  <Link href="#" color="gray.700">
                    Photography
                  </Link>
                  <Link href="#" color="gray.700">
                    Escape Games
                  </Link>
                  <Link href="#" color="gray.700">
                    Tickets & Events
                  </Link>
                  <Link href="#" color="gray.700">
                    Amusement Parks
                  </Link>
                  <Link href="#" color="gray.700">
                    Arcades
                  </Link>
                  <Link href="#" color="gray.700">
                    Kids Activities
                  </Link>
                  <Link href="#" color="gray.700">
                    Bowling
                  </Link>
                  <Link href="#" color="gray.700">
                    Sightseeing & Tours
                  </Link>
                  <Link href="#" color="gray.700">
                    Trampoline & Bounce Houses
                  </Link>
                  <Link href="#" color="gray.700">
                    Sports & Outdoors
                  </Link>
                  <Link href="#" color="gray.700">
                    Boat Tours
                  </Link>
                  <Link href="#" color="gray.700">
                    Museums & Galleries
                  </Link>
                  <Link href="#" color="gray.700">
                    Classes
                  </Link>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* Popover for Gifts */}
          <Popover
            isOpen={showGiftsPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseGiftsPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setShowGiftsPopover(true)}>
                <NavItem icon={FaGift} label="Gifts" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="800px"
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Gifts
                  </Text>
                  <Button
                    onClick={handleCloseGiftsPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>
                <Box className="grid grid-cols-5 gap-8 text-gray-700">
                  <div>
                    <h2 className="font-bold mb-2">Recipient</h2>
                    <ul>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          For Her
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          For Him
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          For Couples
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          For Kids
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold mb-2">Occasion</h2>
                    <ul>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Birthday
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Anniversary
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Wedding
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Graduation
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold mb-2">Interest</h2>
                    <ul>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Foodies
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Relaxing
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Care
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Sports
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Fun Leisure
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Housewarming
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Travelers
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Learning
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold mb-2">Price</h2>
                    <ul>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Under $10
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Under $40
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Under $50
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Under $100
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          $100+
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-bold mb-2">More</h2>
                    <ul>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Trending gifts
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Personalized gifts
                        </Link>
                      </li>
                      <li>
                        <Link href="#" color="gray.700" mb={4} display="block">
                          Gift cards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* New Popover for Auto & Home */}
          <Popover
            isOpen={showHomeAutoPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseHomeAutoPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setHomeAutoPopover(true)}>
                <NavItem icon={FaBullseye} label="Auto & Home" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="400px" // Adjust width as needed
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Auto & Home
                  </Text>
                  <Button
                    onClick={handleCloseHomeAutoPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>
                {/* Grid layout to match the original structure */}
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Oil Change
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Auto Repair & Maintenance
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Car Wash
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Parking
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Home Services
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Cleaning Services
                    </Link>
                  </div>
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Bedding
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Furniture
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Patio, Lawn & Garden
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Kitchen & Dining
                    </Link>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* New Popover for Food & Drink */}
          <Popover
            isOpen={showFoodDrinkPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseFoodDrinkPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setFoodDrinkPopover(true)}>
                <NavItem icon={FaUtensils} label="Food & Drink" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="400px" // Adjust width as needed
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Food & Drink
                  </Text>
                  <Button
                    onClick={handleCloseFoodDrinkPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>

                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Restaurants
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      American Restaurants
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Cafes & Treats
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Asian Restaurants
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Bakeries
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Latin American Restaurants
                    </Link>
                  </div>
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Bars
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Pizza
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Breweries, Wineries & Distilleries
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Seafood Restaurants
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Groceries & Markets
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Steakhouse
                    </Link>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* New Popover for Local */}
          <Popover
            isOpen={showLocalPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseLocalPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setLocalPopover(true)}>
                <NavItem icon={FaMapMarkerAlt} label="Local" />{" "}
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="400px" // Adjust width as needed
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Local
                  </Text>
                  <Button
                    onClick={handleCloseLocalPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Beauty & Spas
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Linkersonal Services
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Health & Fitness
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Retail
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Things To Do
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Food & Drink
                    </Link>
                  </div>
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Auto & Home ImLinkrovement
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Home Services
                    </Link>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* New Popover for Travel */}
          <Popover
            isOpen={showTravelPopover}
            trigger="click"
            placement="bottom-start"
            onClose={handleCloseTravelPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setTravelPopover(true)}>
                <NavItem icon={FaPlane} label="Travel" />{" "}
                {/* Replace with your NavItem */}
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="400px" // Adjust width as needed
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Travel
                  </Text>
                  <Button
                    onClick={handleCloseTravelPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Air-Inclusive
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Waterparks
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Casinos
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Family
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Romantic
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Beach Destinations
                    </Link>
                  </div>
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      City
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Outdoor Activities
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      All-Inclusive
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Cruises
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Culinary
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Luxury
                    </Link>
                  </div>
                  <div>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Spa & Wellness
                    </Link>
                    <Link href="#" color="gray.700" className="block mb-4">
                      Unique Lodging
                    </Link>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          {/* <GoodsPopover /> */}
          <Popover
            isOpen={showGoodsPopover}
            trigger="click"
            placement="bottom-end"
            onClose={handleCloseGoodsPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setGoodsPopover(true)}>
                <NavItem icon={FaBox} label="Goods" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="800px"
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Goods
                  </Text>
                  <Button
                    onClick={handleCloseGoodsPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>

                <div className="grid grid-cols-5 gap-4">
                  {/* Column 1: Health & Beauty Products with Links */}
                  <div>
                    <h2 className="font-semibold mb-2">
                      Health & Beauty Products
                    </h2>
                    <ul className="space-y-4">
                      {[
                        "Fragrance",
                        "Hair Care",
                        "Vitamins & Supplements",
                        "Sexual Wellness",
                        "Personal Care",
                        "Skin Care",
                        "Oral Care",
                        "Health Care",
                        "Cosmetics",
                        "Bath & Body",
                        "Men's Health & Beauty",
                        "Massage",
                        "Aromatherapy",
                        "Shaving & Grooming",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 2: For the Home */}
                  <div>
                    <h2 className="font-semibold mb-2">For the Home</h2>
                    <ul className="space-y-4">
                      {[
                        "Bedding",
                        "Furniture",
                        "Kitchen & Dining",
                        "Luggage",
                        "Outdoor Décor",
                        "Patio, Lawn & Garden",
                        "Mattresses & Accessories",
                        "Storage & Organization",
                        "Bath",
                        "Home Appliances",
                        "Floor Care & Cleaning",
                        "Home Decor",
                        "Office & School Supplies",
                        "Seasonal Decor",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 3: Women's Fashion */}
                  <div>
                    <h2 className="font-semibold mb-2">Women's Fashion</h2>
                    <ul className="space-y-4">
                      {[
                        "Women's Clothing",
                        "Women's Accessories",
                        "Intimates",
                        "Women's Shoes",
                        "Maternity Clothing",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 4: Personalized Gifts */}
                  <div>
                    <h2 className="font-semibold mb-2">Personalized Gifts</h2>
                    <ul className="space-y-4">
                      {[
                        "Photo Books",
                        "Canvas & Photo Art",
                        "Custom Gifts",
                        "Personalized Jewelry",
                        "Clothing & Accessories",
                        "Personalized Home Decor",
                        "Cards & Invitations",
                        "Personalized Kitchen Accessories",
                        "Baby & Kids",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 5: More */}
                  <div>
                    <h2 className="font-semibold mb-2">More</h2>
                    <ul className="space-y-4">
                      {[
                        "Flowers, Sweets & Baskets",
                        "CBD",
                        "Cell Phones & Accessories",
                        "Software",
                        "Electronics",
                        "Video Games",
                        "Jewelry & Watches",
                        "Men's Fashion",
                        "Grocery & Household",
                        "Auto & Home Improvement",
                        "Sports & Outdoors",
                        "Pet Supplies",
                        "Baby & Kids",
                        "Toys",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Expand/Collapse button */}
                <div className="text-center mt-4">
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* coupons section */}

          <Popover
            isOpen={showCouponsPopover}
            trigger="click"
            placement="bottom"
            onClose={handleCloseCouponsPopover}
          >
            <PopoverTrigger>
              <Box onClick={() => setShowCouponsPopover(true)}>
                <NavItem icon={FaTicketAlt} label="Coupons" />
              </Box>
            </PopoverTrigger>
            <PopoverContent
              shadow="lg"
              rounded="lg"
              p={4}
              w="700px"
              bg="white"
              fontFamily="Arial, sans-serif"
              marginTop="14px"
              transform="translateX(-30px)"
            >
              <PopoverBody>
                {/* Header with title and close button */}
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    Coupons
                  </Text>
                  <Button
                    onClick={handleCloseCouponsPopover}
                    variant="unstyled"
                    fontSize="2xl"
                  >
                    &times;
                  </Button>
                </Flex>

                <div className="grid grid-cols-3 gap-4">
                  {/* Column 1 */}
                  <div>
                    <h2 className="font-bold mb-2">Popular Brands</h2>
                    <ul className="space-y-4">
                      {[
                        { name: "Amazon", url: "https://www.amazon.com" },
                        { name: "Costco", url: "https://www.costco.com" },
                        { name: "eBay", url: "https://www.ebay.com" },
                        { name: "Expedia", url: "https://www.expedia.com" },
                        {
                          name: "Great Clips",
                          url: "https://www.greatclips.com",
                        },
                        { name: "Hotels.com", url: "https://www.hotels.com" },
                        { name: "Macy's", url: "https://www.macys.com" },
                        { name: "Nike", url: "https://www.nike.com" },
                        { name: "Pizza Hut", url: "https://www.pizzahut.com" },
                        {
                          name: "The Home Depot",
                          url: "https://www.homedepot.com",
                        },
                        { name: "TurboTax", url: "https://www.turbotax.com" },
                        { name: "Viator", url: "https://www.viator.com" },
                        {
                          name: "VistaPrint",
                          url: "https://www.vistaprint.com",
                        },
                        { name: "Walmart", url: "https://www.walmart.com" },
                        { name: "Wayfair", url: "https://www.wayfair.com" },
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item.name} className="mb-4">
                            <Link
                              href={item.url}
                              color="gray.700"
                              className="block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h2 className="font-semibold mb-2">Women's Fashion</h2>
                    <ul className="space-y-4">
                      {[
                        "Trending",
                        "Betterhelp",
                        "Booking.com",
                        "Budget",
                        "Cabela's",
                        "Dick's Sporting Goods",
                        "HBO Max",
                        "Macy's",
                        "Old Navy",
                        "Paramount+",
                        "ProFlowers",
                        "Sam's Club",
                        "Shutterfly",
                        "Sunglass Hut",
                        "TaxSlayer",
                        "Wayfair",
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item} className="mb-4">
                            <Link href="#" color="gray.700" className="block">
                              {item}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h2 className="font-bold mb-2">Coupons Blog</h2>
                    <ul className="space-y-4">
                      {[
                        {
                          name: "Best 4th of July Sales & Promo Codes",
                          url: "/blog/4th-of-july-sales",
                        },
                        {
                          name: "Sephora Sales Calendar 2024",
                          url: "/blog/sephora-sales-calendar-2024",
                        },
                        {
                          name: "Hobby Lobby 2024 Sales Calendar",
                          url: "/blog/hobby-lobby-sales-calendar-2024",
                        },
                        {
                          name: "Amazon Prime Day Deals on July 16 & 17",
                          url: "/blog/amazon-prime-day-deals",
                        },
                        {
                          name: "Amazon Prime Discount: Do You Qualify?",
                          url: "/blog/amazon-prime-discount",
                        },
                        {
                          name: "Amazon Music Unlimited Free 3-Month Trial",
                          url: "/blog/amazon-music-unlimited",
                        },
                        {
                          name: "Ulta 2024 Sales Calendar",
                          url: "/blog/ulta-sales-calendar-2024",
                        },
                        {
                          name: "Back to School: Shop Tax-Free Weekends",
                          url: "/blog/back-to-school-tax-free-weekends",
                        },
                        {
                          name: "Nike Factory Outlet Stores",
                          url: "/blog/nike-factory-outlet-stores",
                        },
                        {
                          name: "Lowe's 2024 Sales Calendar",
                          url: "/blog/lowes-sales-calendar-2024",
                        },
                        {
                          name: "Home Depot 2024 Seasonal Sales Guide",
                          url: "/blog/home-depot-seasonal-sales-guide",
                        },
                        {
                          name: "Nordstrom Anniversary Sale Calendar",
                          url: "/blog/nordstrom-anniversary-sale-calendar",
                        },
                      ]
                        .slice(0, expanded ? undefined : 5)
                        .map((item) => (
                          <li key={item.name} className="mb-4">
                            <Link
                              href={item.url}
                              color="gray.700"
                              className="block"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Expand/Collapse button */}
                <div className="text-center mt-4">
                  <button
                    className="text-blue-500 underline"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "Show Less" : "Show More"}
                  </button>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
    </>
  );
};

export const NavItem = ({ icon, label, onClick }) => (
  <Link
    href="#"
    display="flex"
    alignItems="center"
    gap={1}
    position="relative"
    color="gray.700"
    _hover={{
      _after: {
        width: "100%",
        height: "2.5px",
      },
    }}
    _after={{
      content: '""',
      position: "absolute",
      bottom: "-20px",
      left: 0,
      backgroundColor: "rgb(0 138 34)",
      transition: "transform 250ms ease-in-out",
    }}
    onClick={(e) => {
      onClick && onClick(); // Handle navigation if provided
    }}
  >
    <Icon as={icon} />
    <Text>{label}</Text>
  </Link>
);

export default NavBarLinks;
