import React from "react";
import { Box, Flex, Icon, Text, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCartMessage = ({ handleContinueShopping }) => (
  <Box mt={8} maxW="400px" w="full" mx="auto">
    <Flex direction="column" alignItems="center">
      <Icon
        as={FaShoppingCart}
        boxSize={12}
        sx={{ color: "rgb(48, 137, 92)" }}
        mb={4}
      />
      <Text fontSize="lg" fontWeight="medium" color="gray.600" mb={4}>
        Your shopping cart is empty.
      </Text>
      <Button
        sx={{ backgroundColor: "rgb(48, 137, 92)", color: "white" }}
        size="lg"
        rounded="full"
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </Button>
    </Flex>
  </Box>
);

export default EmptyCartMessage;
