import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

function CountrySelection() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("USA");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <Flex justify="center" align="center" bg="gray.100">
      <Box position="relative" w="40">
        {/* Country selection box */}
        <Flex
          align="center"
          justify="space-between"
          bg="white"
          border="1px"
          borderColor="gray.300"
          rounded="md"
          p={2}
          cursor="pointer"
          onClick={toggleDropdown}
        >
          <Flex align="center">
            <Icon as={FaGlobe} mr={2} />
            <Text>{selectedCountry}</Text>
          </Flex>
          <Icon
            as={FaChevronDown}
            transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
            transition="transform 0.2s"
          />
        </Flex>

        {/* Custom Dropdown List */}
        {isOpen && (
          <Box
            position="absolute"
            top="100%"
            left="0"
            w="full"
            mt={1}
            bg="white"
            border="1px"
            borderColor="gray.300"
            rounded="md"
            shadow="lg"
            zIndex="1"
            maxH="200px"
            overflowY="scroll"
          >
            {[
              "USA",
              "United Kingdom",
              "France",
              "Deutschland",
              "Italia",
              "España",
              "Polska",
              "Nederland",
              "Ireland",
              "UAE",
              "België",
              "Canada",
              "Australia",
            ].map((country) => (
              <Box
                key={country}
                px={4}
                py={2}
                _hover={{ bg: "gray.100" }}
                cursor="pointer"
                onClick={() => handleSelect(country)}
              >
                <Text>{country}</Text>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default CountrySelection;
