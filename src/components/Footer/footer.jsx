import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Icon,
  Link,
  Grid,
  Image,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
  FaChevronDown,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import QuickLinks from "../footer/QuickLinks";
import CountrySelection from "./CountrySelection";

const Footer = () => {
  return (
    <Box bg="gray.100" p={8}>
      {/* Top section */}
      <Flex justify="space-between" align="start" mb={8}>
        {/* Groupon Sites */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Groupon Sites
          </Text>
          <CountrySelection />
        </Box>

        {/* Sign up for deals */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Sign up for the latest deals
          </Text>
          <Flex
            border="1px"
            borderColor="gray.300"
            rounded="md"
            p={2}
            bg="white"
          >
            <Input
              type="email"
              placeholder="Email Address"
              flexGrow={1}
              border="none"
              p={2}
              _focus={{ outline: "none" }}
            />
            <Button bg="green.500" color="white" p={2} rounded="md">
              <Icon as={FaArrowRight} />
            </Button>
          </Flex>
          <Text fontSize="xs" mt={2}>
            By subscribing, I agree to the{" "}
            <Link color="blue.500">Terms of Use</Link> and have read the{" "}
            <Link color="blue.500">Privacy Statement</Link>.
          </Text>
        </Box>

        {/* Get the Groupon App */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Get the Groupon App
          </Text>
          <Flex align="center">
            <Image
              src="https://placehold.co/100x100"
              alt="QR code for Groupon App"
              boxSize="100px"
              mr={4}
            />
            <Box>
              <HStack spacing={1} mb={2}>
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
                <Icon as={FaStar} color="yellow.400" />
              </HStack>
              <Text fontSize="xs" mb={2}>
                100M+ downloads
              </Text>
              <Button bg="green.500" color="white" p={2} rounded="md">
                Get the App
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Follow Us */}
        <Box>
          <Text fontWeight="bold" mb={2}>
            Follow Us
          </Text>
          <HStack spacing={4}>
            <Icon as={FaFacebookF} />
            <Icon as={FaInstagram} />
            <Icon as={FaTwitter} />
            <Icon as={FaLinkedinIn} />
          </HStack>
        </Box>
      </Flex>

      {/* Bottom Section */}
      <Box borderTop="1px" borderColor="gray.300" pt={8}>
        <Grid templateColumns="repeat(4, 1fr)" gap={8} mb={8}>
          {/* Support */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Support
            </Text>
            <ul>
              <li>
                <Link href="#" color="gray.700">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Report Infringement
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Refund Policies
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Merchant Class Action Settlement Notice
                </Link>
              </li>
            </ul>
          </Box>

          {/* Sell on Groupon */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Sell on Groupon
            </Text>
            <ul>
              <li>
                <Link href="#" color="gray.700">
                  Join Groupon Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Run a Groupon Campaign
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  How does Groupon work for Merchants
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Sponsor your Campaign
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Vendor Code of Conduct
                </Link>
              </li>
            </ul>
          </Box>

          {/* Company */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Company
            </Text>
            <ul>
              <li>
                <Link href="#" color="gray.700">
                  About Groupon
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" color="gray.700">
                  Management Team
                </Link>
              </li>
            </ul>
          </Box>

          {/* Quick Links */}
          <QuickLinks />
        </Grid>

        {/* Footer Disclaimer */}
        <Text textAlign="center" color="gray.500" fontSize="xs">
          © 2024 Groupon, Inc. All Rights Reserved.{" "}
          <Link href="#" color="gray.700">
            Terms and Conditions
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Privacy Statement
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Do Not Sell or Share My Personal Information
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Accessibility
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Sitemap
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Customer Support
          </Link>{" "}
          ·{" "}
          <Link href="#" color="gray.700">
            Licenses
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
