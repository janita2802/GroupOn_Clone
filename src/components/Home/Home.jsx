import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  Text,
  Heading,
  Grid,
  Button,
  Icon,
  VStack,
  HStack,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  position,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa"; // Import icons from react-icons
import LoadMore from "./MoreLoader";
import { title } from "framer-motion/client";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase"; // Adjust path if necessary
import { useAuth } from "../../firebase"; // Import the Firebase auth context or hook
import { useNavigate } from "react-router-dom";

const HeartIcon = ({ isFilled, onClick, color }) => (
  <Icon
    viewBox="0 0 24 24"
    color={color || (isFilled ? "pink.500" : "gray.500")}
    boxSize={6}
    onClick={onClick}
    cursor={onClick ? "pointer" : "default"} // Change cursor based on clickability
    style={{
      position: "absolute",
      top: "10px",
      right: "10px",
    }}
  >
    <path
      fill="currentColor"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </Icon>
);
const StarIcon = () => (
  <Icon
    viewBox="0 0 24 24"
    color={"yellow.500"}
    boxSize={7}
    style={{
      position: "relative",
      top: "6px",
      marginRight: "-14px",
    }}
  >
    <path
      fill="currentColor"
      d="M6.36376 1.00501C6.22877 0.675007 5.76752 0.675007 5.63252 1.00501L4.41752 3.96001C4.36127 4.09876 4.23002 4.19251 4.08377 4.20376L0.926266 4.45876C0.573766 4.48876 0.435016 4.93126 0.701266 5.16001L3.10502 7.24126C3.21752 7.33876 3.26627 7.49251 3.23252 7.63876L2.49752 10.7513C2.41502 11.0963 2.79002 11.37 3.09002 11.1863L5.79377 9.51751C5.92127 9.43876 6.07876 9.43876 6.20626 9.51751L8.91002 11.1863C9.21002 11.37 9.58126 11.1 9.50251 10.7513L8.76751 7.63876C8.73376 7.49251 8.78251 7.33876 8.89501 7.24126L11.2988 5.16001C11.565 4.92751 11.4225 4.48501 11.0738 4.45876L7.91627 4.20376C7.77002 4.19251 7.63876 4.09876 7.58251 3.96001L6.36376 1.00501Z"
    />
  </Icon>
);

function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Chicago");
  const [heartStates, setHeartStates] = useState({});
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [cities, setCities] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); // Initially show 6 posts
  const { user } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const cityData = ["Chicago", "New York", "Los Angeles"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading

      try {
        const db = getFirestore();
        const attractionsCollection = collection(
          db,
          `cities/${selectedCity}/attractions`
        );
        const querySnapshot = await getDocs(attractionsCollection);
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());

        console.log(fetchedData); // Verify data in console
        setData(fetchedData); // Store data in state
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Stop the loader
      }
    };

    fetchData();
  }, [selectedCity]); // Fetch new data whenever selectedCity changes

  const loadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 9); // Load 6 more posts
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
    setVisibleCount(9);
  };

  const handleHeartClick = async (index, item) => {
    setHeartStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    if (user) {
      try {
        const userCartRef = doc(db, "carts", user.uid); // Reference to user's cart
        const cartCollection = collection(userCartRef, "items");

        // Check if item is already in cart
        const cartSnapshot = await getDocs(cartCollection);
        const existingItem = cartSnapshot.docs.find(
          (doc) => doc.data().title === item.title
        );

        if (!existingItem) {
          // Add the item to the user's cart
          await addDoc(cartCollection, {
            ...item,
            addedAt: new Date(),
          });
          console.log("Item added to cart");
          toast({
            title: "Added to cart.",
            description: `${item.title} has been added to your cart.`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          console.log("Item already in cart");
          toast({
            title: "Already in cart.",
            description: `${item.title} is already in your cart.`,
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Error adding item to cart: ", error);
        toast({
          title: "Error.",
          description: "There was an error adding the item to your cart.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      // Redirect to login if user is not authenticated
      console.log("User not authenticated");
      toast({
        title: "Authentication required.",
        description: "Please log in to add items to your cart.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      navigate("/cart");
    }
  };

  if (loading) {
    return (
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {[...Array(3)].map((_, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            style={{
              marginTop: "150px",
              marginLeft: "50px",
              marginRight: "50px",
              marginBottom: "50px",
            }}
          >
            <Skeleton height="200px" />
            <Box p={4}>
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
              <SkeletonCircle size="10" />
            </Box>
          </Box>
        ))}
      </Grid>
    );
  }

  return (
    <div className="p-8">
      <div className="relative inline-block">
        <h1
          className="text-3xl font-bold mt-4 mb-4 pb-4 cursor-pointer"
          style={{ marginBottom: "20px" }}
          onClick={toggleDropdown}
        >
          Trending today in {selectedCity}{" "}
          <i className="fas fa-chevron-down"></i>
        </h1>
        {dropdownOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {/* {Object.keys(data).map((city) => ( */}
              {cityData.map((city) => (
                <a
                  key={city}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => selectCity(city)}
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <Box p={8}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            marginBottom={"20px"}
          >
            Trending today in {selectedCity}
          </MenuButton>
          <MenuList>
            {/* {Object.keys(data).map((city) => ( */}
            {cityData.map((city) => (
              <MenuItem key={city} onClick={() => selectCity(city)}>
                {city}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {
            data.slice(0, visibleCount).map((attraction, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
              >
                <Box position="relative">
                  <img
                    src={attraction.img}
                    // src={item.image}
                    alt={attraction.alt}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    position="absolute"
                    top={2}
                    left={2}
                    bg="purple.200"
                    color="purple.800"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    Popular Gift
                  </Box>
                  {/* Clickable Heart */}
                  <HeartIcon
                    isFilled={heartStates[index]} // Check if the heart for this item is filled
                    onClick={() => handleHeartClick(index)} // Handle heart click
                    position="absolute"
                    top={2}
                    right={2}
                  />
                  <Button
                    onClick={() => handleHeartClick(index, attraction)}
                    style={{
                      position: "relative",
                      top: "10px",
                      left: "10px",
                      fontSize: "small",
                    }}
                  >
                    Add to Cart
                    <Icon
                      as={FaShoppingCart}
                      boxSize={4}
                      // viewBox="0 0 24 24"
                      color={"gray.500"}
                      cursor={"pointer"} // Change cursor based on clickability
                      marginLeft={2}
                    />
                  </Button>
                </Box>
                <Box p={4}>
                  <Text fontSize="sm" color="gray.500">
                    {attraction.category}
                    {/* {item.sub-title} */}
                  </Text>
                  <Heading size="md" color="blue.600">
                    {attraction.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    {attraction.location}{" "}
                    <Text as="span" color="gray.400">
                      {attraction.distance}
                    </Text>
                  </Text>
                  <Box
                    style={{
                      columnCount: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{
                        rowCount: 2,
                      }}
                    >
                      {/* <HStack spacing={2} mt={2} fontFamily={"__Nunito_Sans_ab7213', '__Nunito_Sans_Fallback_ab7213"}> */}
                      {/* <HStack spacing={2} mt={2} fontFamily={"--font-nunito"}> */}
                      <HStack spacing={2} mt={2}>
                        <Text as="s" color="gray.500" fontSize="xl">
                          {attraction.originalPrice}
                        </Text>
                        <Text color="green.600" fontWeight="bold" fontSize="xl">
                          {attraction.discountedPrice}
                        </Text>
                        <Text
                          color="green.600"
                          fontSize="xl"
                          className="gap-4xs rounded-xxs px-xxs py-4xs leading-none gap-y-0.5 whitespace-nowrap font-bold tracking-wide !px-1 !py-0.5 !text-xxs bg-green-100 text-primary"
                        >
                          {attraction.discount}
                        </Text>
                      </HStack>
                      <Text color="purple.600" fontWeight="semibold">
                        {attraction.finalPrice}{" "}
                        <Text as="span" fontSize="xs" color="purple.600">
                          {attraction.code}
                        </Text>
                      </Text>
                    </Box>
                    <HStack spacing={1} mt={2}>
                      <StarIcon />
                      <Text fontSize="sm" color="gray.600">
                        {attraction.rating}
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        {attraction.reviews}
                      </Text>
                    </HStack>
                  </Box>
                </Box>
              </Box>
            ))
            // ) : (
            //   <Text>No data available for {selectedCity}.</Text>
            // )
          }
        </Grid>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {data.length > visibleCount && ( // Show button only if there are more posts to load
            <Button
              onClick={loadMorePosts}
              border="1px solid black"
              borderRadius="full"
              px={6}
              py={2}
              color="black"
              mb={8}
              mt={8}
            >
              Load More
            </Button>
          )}
        </Box>
        <LoadMore />
      </Box>
    </div>
  );
}

export default Home;
