import {
  Box,
  Button,
  Text,
  Image,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

function AdBox({ onClose }) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      position="relative"
      width="80%"
      maxW="400px"
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={4}
      mb={4}
    >
      <IconButton
        aria-label="Close"
        icon={<CloseIcon />}
        position="absolute"
        top={2}
        right={2}
        variant="ghost"
        color="gray.400"
        _hover={{ color: "gray.600" }}
        onClick={onClose} // Close the ad box
      />
      <Flex direction="column" align="center" textAlign="center">
        <Heading as="h2" size="lg" color="blue.600" fontWeight="bold">
          Food Sensitivity, Vitamins & Gut Health Test
        </Heading>
        <Text color="gray.600">Exclusive Groupon Offer</Text>
        <Text color="gray.600">Up to 79% Off</Text>
        <Button
          mt={2}
          bg="blue.600"
          color="white"
          borderRadius="full"
          px={4}
          py={2}
          onClick={() => {
            // Get Tested logic here
          }}
        >
          Get Tested
        </Button>
      </Flex>
      <Image
        src="https://placehold.co/50x50"
        alt="Advanced Food Intolerance Labs logo"
        borderRadius="full"
        position="absolute"
        bottom={2}
        left={2}
      />
      <Text
        position="absolute"
        bottom={2}
        right={2}
        color="gray.400"
        fontSize="xs"
      >
        Sponsored
      </Text>
      <Button
        position="absolute"
        bottom={10}
        left="50%"
        transform="translateX(-50%)"
        bg="black"
        color="white"
        borderRadius="full"
        px={2}
        py={1}
        fontSize="xs"
        onClick={handleScrollToTop}
      >
        ↑ Top
      </Button>
    </Box>
  );
}
