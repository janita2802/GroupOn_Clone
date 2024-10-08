import React from "react";
import { Box, Button, Icon, Text, Flex } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";
import LoginSlideIn from "../LoginSlideIn";

const LoginPrompt = ({ showLogin, setShowLogin }) => (
  <Box>
    {showLogin && (
      <LoginSlideIn showLogin={showLogin} setShowLogin={setShowLogin} />
    )}

    <Box
      bg="white"
      p={8}
      // mt={200}
      mb={100}
      w={{ base: "full", sm: "400px" }}
      textAlign="center"
      mx="auto"
    >
      <Box mt={250} boxShadow="lg" rounded="lg" p={8}>
        <Box>
          <Flex direction="column" alignItems="center">
            <Icon
              as={FaSignInAlt}
              boxSize={12}
              mb={4}
              sx={{ color: "rgb(48, 137, 92)" }}
            />
            <Text fontSize="lg" mb={6} fontWeight="medium" color="gray.700">
              Please Sign In to View Your Cart
            </Text>
            <Button
              sx={{ backgroundColor: "rgb(48, 137, 92)", color: "white" }}
              onClick={() => setShowLogin(true)}
              size="lg"
              rounded="full"
            >
              Sign In
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default LoginPrompt;
