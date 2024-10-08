import React from "react";
import {
  Box,
  Flex,
  Input,
  Icon,
  Text,
  Link,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";

const LocationInput = () => {
  return (
    <Box
      bg="white"
      p={6}
      rounded="lg"
      boxShadow="lg"
      w="full"
      maxW="lg"
      mt={100}
    >
      <Flex
        align="center"
        border="1px"
        borderColor="gray.300"
        borderRadius="full"
        px={3}
        py={2}
      >
        <Icon as={FaMapMarkerAlt} color="gray.500" />
        <Input
          placeholder="Zip Code, Neighborhood, City"
          variant="unstyled"
          ml={2}
          focusBorderColor="transparent" // Remove the border on focus
          _focus={{ outline: "none" }} // Hide outline
        />
      </Flex>
      <Box mt={4} mb={4}>
        <Link href="#" color="blue.600" display="flex" alignItems="center">
          <Icon as={FaLocationArrow} mr={2} />
          <Text>Set Current Location</Text>
        </Link>
      </Box>
      <Divider borderColor="gray.300" />
      <VStack spacing={4} mt={4}></VStack>
    </Box>
  );
};

export default LocationInput;
