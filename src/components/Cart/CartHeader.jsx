import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const CartHeader = () => (
  <Flex justifyContent="space-between" mb={10}>
    <Heading as="h2" size="lg" fontWeight="bold">
      Your Cart
    </Heading>
    <Icon as={FaShoppingCart} w={6} h={6} color="gray.600" />
  </Flex>
);

export default CartHeader;
