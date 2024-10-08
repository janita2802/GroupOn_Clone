import { useState, useEffect } from "react";
import { Icon, Badge, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../firebase"; // Firebase auth context
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { user } = useAuth();
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    let unsubscribe; // declare the unsubscribe variable

    if (user) {
      // Set up a real-time listener for the user's cart
      const userCartRef = collection(db, "carts", user.uid, "items");
      unsubscribe = onSnapshot(userCartRef, (snapshot) => {
        setCartItemCount(snapshot.size); // Set the number of items in the cart
      });
    } else {
      // If no user is logged in, reset cart count to 0
      setCartItemCount(0);
    }

    // Clean up the listener when the component unmounts
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user, db]);

  // Handler to navigate to the CartPage
  const handleCartClick = () => {
    navigate("/cart"); // Change this path to match your route for the CartPage
  };

  return (
    <Box position="relative">
      <Icon
        as={FaShoppingCart}
        boxSize={6}
        onClick={handleCartClick} // Trigger navigation on click
        cursor="pointer" // Make the icon clickable
      />
      {cartItemCount > 0 && (
        <Badge
          colorScheme="red"
          borderRadius="full"
          position="absolute"
          top="-16px" // Adjusted position
          right="0px" // Adjusted position
          fontSize="xs" // Smaller font size
          px={1} // Adjust padding to reduce size
          py={0.5} // Adjust padding to reduce size
        >
          {cartItemCount}
        </Badge>
      )}
    </Box>
  );
};

export default CartIcon;
