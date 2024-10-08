import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Input,
  Stack,
  Text,
  Link,
  VStack,
  Divider,
  IconButton,
  FormControl,
  FormErrorMessage,
  useToast, // Import useToast from Chakra UI
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaEye,
  FaTimes,
  FaHeart,
  FaClock,
  FaGift,
  FaBell,
  FaCommentDots,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const LoginSlideIn = ({ showLogin, setShowLogin }) => {
  const toast = useToast(); // Initialize the toast hook
  const handleClose = () => {
    setShowLogin(false); // Close the login modal
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // New state for name
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSignup, setIsSignup] = useState(false); // Determine if it's sign-up mode
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true); // State for name validation
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    setIsPasswordValid(password.length >= 6);
    if (isSignup) {
      setIsNameValid(name.length > 3); // Validate name length only in sign-up mode
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (isEmailValid && isPasswordValid && (isSignup ? isNameValid : true)) {
      try {
        if (isSignup) {
          // Handle sign-up process
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("User signed up:", userCredential.user);

          // Show a success toast
          toast({
            title: "Account created.",
            description: "You've successfully signed up.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          // Toggle back to login mode after successful sign-up
          setIsSignup(false);
          setEmail("");
          setPassword("");
          setName("");
        } else {
          // Handle login process
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log("User logged in:", userCredential.user);

          // Show a success toast
          toast({
            title: "Login successful.",
            description: "You've successfully logged in.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          navigate("/"); // Redirect to home page after successful login
          setShowLogin(false); // Close the login slider
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <Flex
      justify="end"
      align="center"
      minHeight="50vh"
      position={"fixed"}
      mt={"70px"}
      right={1}
      zIndex={2000}
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        shadow="lg"
        width="100%"
        maxW="500px"
        overflowY="auto"
        maxHeight="80vh"
      >
        <Flex
          justify="space-between"
          mb={4}
          borderBottom="2px"
          borderColor="black"
        >
          <IconButton
            aria-label="Close"
            icon={<FaTimes />}
            onClick={handleClose}
            position="absolute"
            top={-3}
            right={4}
            variant="outline"
            colorScheme="gray"
          />

          <Button
            variant="link"
            fontSize="lg"
            fontWeight="semibold"
            paddingBottom={"10px"}
            borderBottom={!isSignup ? "2.8px solid black" : "none"}
            borderRadius={0}
            _hover={{ textDecoration: "none" }}
            color={!isSignup ? "black" : "gray.500"}
            onClick={() => setIsSignup(false)}
            mr={2}
          >
            I have an account
          </Button>
          <Button
            variant="link"
            fontSize="lg"
            fontWeight="semibold"
            paddingBottom={"10px"}
            borderBottom={isSignup ? "2.8px solid black" : "none"}
            borderRadius={0}
            _hover={{ textDecoration: "none" }}
            onClick={() => setIsSignup(true)}
            color={isSignup ? "black" : "gray.500"}
          >
            I'm a new customer
          </Button>
        </Flex>

        <Stack spacing={4}>
          <Button
            colorScheme="facebook"
            leftIcon={<FaFacebookF />}
            width="full"
          >
            Continue with Facebook
          </Button>
          <Button
            leftIcon={<FaGoogle />}
            width="full"
            border="1px solid"
            borderColor="gray.200"
          >
            Continue with Google
          </Button>
          <Button colorScheme="blackAlpha" leftIcon={<FaApple />} width="full">
            Continue with Apple
          </Button>
        </Stack>

        <Text textAlign="center" my={4} color="gray.500">
          Or sign {isSignup ? "up" : "in"} with email
        </Text>

        <form>
          <Stack spacing={4}>
            {isSignup && (
              <FormControl isInvalid={!isNameValid}>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isNameValid && (
                  <FormErrorMessage>
                    Name must be longer than 3 characters
                  </FormErrorMessage>
                )}
              </FormControl>
            )}
            <FormControl isInvalid={!isEmailValid}>
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isEmailValid && (
                <FormErrorMessage>
                  Please provide a valid email
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!isPasswordValid}>
              <Box position="relative">
                <Input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  aria-label="Toggle password visibility"
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                  position="absolute"
                  right={3}
                  height={8}
                  mt={1}
                  color="gray.500"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {!isPasswordValid && (
                  <FormErrorMessage>
                    Password must be at least 6 characters
                  </FormErrorMessage>
                )}
              </Box>
            </FormControl>
          </Stack>

          {errorMessage && <Text color="red.500">{errorMessage}</Text>}

          <Flex justify="space-between" align="center" my={4}>
            {!isSignup && <Checkbox>Remember me</Checkbox>}
            <Link color="blue.500">Forgot Password?</Link>
          </Flex>

          <Button
            colorScheme="green"
            width="full"
            py={2}
            type="button"
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          {!isSignup && (
            <>
              <Text fontSize="xs" color="gray.500" textAlign="center" mt={4}>
                This site is protected by reCAPTCHA and the Google{" "}
                <Link color="blue.500">Privacy Policy</Link> and{" "}
                <Link color="blue.500">Terms of Service</Link> apply.
              </Text>
            </>
          )}

          {/* Terms and Privacy notice */}
          <Text fontSize="xs" color="gray.500" textAlign="center" mt={4}>
            By clicking an option above, I agree to the{" "}
            <Link color="blue.500">Terms and Conditions</Link> and have read the{" "}
            <Link color="blue.500">Privacy Statement</Link>.
          </Text>
        </form>

        {/* Footer section */}
        <VStack spacing={2} mt={6} align="start" color="gray.900" fontSize="sm">
          <Flex align="center">
            <Icon as={FaHeart} mr={2} />
            My Wishlist
          </Flex>
          <Flex align="center">
            <Icon as={FaClock} mr={2} />
            Order History
          </Flex>
          <Flex align="center">
            <Icon as={FaGift} mr={2} />
            Gift Cards
          </Flex>
          <Flex align="center">
            <Icon as={FaBell} mr={2} />
            Notifications
          </Flex>
          <Flex align="center">
            <Icon as={FaCommentDots} mr={2} />
            Customer Support
          </Flex>
        </VStack>
        <Divider py={4} />
        {/* Customer Support section */}
        <Text color="gray.500" fontSize="sm" mt={4}>
          Customer Support
        </Text>
        <Text color="gray.500" fontSize="sm">
          Sell on Groupon
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginSlideIn;
