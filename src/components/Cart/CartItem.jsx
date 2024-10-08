import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const CartItem = ({ item, handleRemoveItem }) => (
  <Box
    key={item.id}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={4}
    bg="white"
    boxShadow="md"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    mb={4}
    maxW="400px"
    mx="auto"
  >
    <Image
      boxSize="80px"
      objectFit="cover"
      src={item.img}
      alt={item.alt}
      borderRadius="md"
    />
    <Box ml={4} flex="1" textAlign="left">
      <Text fontSize="lg" fontWeight="bold">
        {item.alt}
      </Text>
    </Box>
    <Box
      bg="black"
      color="white"
      px={4}
      py={2}
      mr={2}
      borderRadius="md"
      ml={4}
      textAlign="center"
    >
      ${item.discountedPrice}
    </Box>
    <Button
      colorScheme="red"
      size="sm"
      onClick={() => handleRemoveItem(item.id)}
    >
      Remove
    </Button>
  </Box>
);

export default CartItem;
