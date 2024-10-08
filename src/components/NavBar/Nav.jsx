import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
  Link,
  Icon,
  Badge,
  Button,
} from "@chakra-ui/react";
import {
  FaSearch,
  FaFlagUsa,
  FaHeart,
  FaShoppingCart,
  FaBell,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

import LocationInput from "./LocationInput";
import LoginSlideIn from "../LoginSlideIn";
import { auth } from "../../firebase"; // Import Firebase auth
import NavBarLinks from "./NavLinks";
import CartIcon from "./CartIcon";

export const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(false);
  const locationInputRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setShowLogin(true);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleLocationSelect = () => {
    setShowLocationInput(true);
  };

  // Close LocationInput when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target)
      ) {
        setShowLocationInput(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box
        position="fixed" // Make the NavBar fixed
        top={0} // Align it to the top
        left={0} // Align it to the left
        right={0} // Align it to the right
        zIndex={1000} // Set a high z-index
        p={4}
        bg="white" // Set background color
        boxShadow="md" // Add a shadow
      >
        <Flex
          justify="space-around"
          align="center"
          mx="auto"
          w="100%"
          maxW="1200px"
        >
          {/* Left section with Logo, Search Bar, and Location */}
          <Flex align="center" gap={6}>
            <Text color="green.500" fontWeight="bold" fontSize="3xl" mr={8}>
              GROUPON
            </Text>

            {/* Search bar with Select dropdown and search button inside */}
            <Box position="relative" w={"500px"}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" pl={4}>
                  <Icon as={FaSearch} color="gray.400" boxSize={6} />
                </InputLeftElement>

                <Input
                  placeholder="Search for deals"
                  pl="12"
                  borderRadius="full"
                  w="100%"
                />

                <InputRightElement width="auto">
                  <Flex align="center" gap={2} pr={2}>
                    <Select
                      borderRadius="full"
                      size="sm"
                      w="auto"
                      bg="transparent"
                      onClick={handleLocationSelect}
                    >
                      <option>Chicago</option>
                    </Select>
                    <IconButton
                      aria-label="Search"
                      icon={<FaSearch />}
                      colorScheme="green"
                      size="md"
                      borderRadius="full"
                    />
                  </Flex>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>

          {/* Right section with Icons and Sign In */}
          <Flex align="center" gap={6}>
            <Icon as={FaFlagUsa} boxSize={6} />
            <Icon as={FaHeart} boxSize={6} />
            {/* <Icon
              as={FaShoppingCart}
              boxSize={6}
              onClick={handleCartClick} // Trigger navigation on click
              cursor="pointer" // Make the icon clickable
            /> */}
            <CartIcon />
            <Box position="relative">
              <Icon as={FaBell} boxSize={6} />
              <Badge
                position="absolute"
                top="0"
                right="0"
                colorScheme="blue"
                borderRadius="full"
                px={1}
                fontSize="xs"
              >
                12
              </Badge>
            </Box>

            {/* Conditional rendering for Sign In / Logout */}
            {auth.currentUser ? (
              <Button colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Box
                borderRadius="full"
                w="auto"
                border="1px solid"
                borderColor="gray.300"
                p={2}
                cursor="pointer"
                onClick={() => setShowLogin(true)}
              >
                <Flex align="center" gap={1}>
                  <Icon as={FaUser} boxSize={6} />
                  <Text>Sign In</Text>
                  <Icon as={FaChevronDown} boxSize={5} />
                </Flex>
              </Box>
            )}
          </Flex>
        </Flex>
        <NavBarLinks />
      </Box>

      {/* LocationInput positioned directly below the search bar */}
      {showLocationInput && (
        <div
          ref={locationInputRef}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
            marginTop: "-30px",
          }}
        >
          <LocationInput />
        </div>
      )}

      {showLogin && (
        <LoginSlideIn showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
};
