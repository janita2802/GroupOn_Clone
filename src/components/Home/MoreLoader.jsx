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

function LoadMore() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="8"
      bg="white"
      py={4}
    >
      {isVisible && (
        <>
          {/* <Button
            border="1px solid black"
            borderRadius="full"
            px={6}
            py={2}
            color="black"
            mb={8}
            onClick={() => {
              // Load more items logic here
            }}
          >
            Load more
          </Button> */}
          <Box
            position="relative"
            width="80%"
            maxW="400px"
            bg="white"
            boxShadow="md"
            borderRadius="lg"
            p={4}
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
              onClick={() => setIsVisible(false)} // Hide the card on close
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
              position="sticky"
              bottom={10} // Adjusted to position it above the close button
              left="50%"
              transform="translateX(-50%)"
              bg="black"
              color="white"
              borderRadius="full"
              px={2}
              py={1}
              fontSize="xs"
              width={"80px"}
              onClick={handleScrollToTop}
            >
              ↑ Top
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default LoadMore;
