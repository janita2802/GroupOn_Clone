import React, { useState, useEffect } from "react";
import { Box, Flex, VStack, Button } from "@chakra-ui/react";
import CartHeader from "./CartHeader";
import EmptyCartMessage from "./EmptyCartMessage";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import LoginPrompt from "./LoginPrompt";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const auth = getAuth();

  const handleContinueShopping = () => {
    navigate("/");
  };

  const handleRemoveItem = async (itemId) => {
    if (!user || !user.uid || !itemId) return;

    try {
      const db = getFirestore();
      const itemDoc = doc(db, `carts/${user.uid}/items`, itemId);
      await deleteDoc(itemDoc);
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error removing item: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (user) {
      const fetchCartItems = async () => {
        try {
          const db = getFirestore();
          const cartRef = collection(db, `carts/${user.uid}/items`);
          const cartSnapshot = await getDocs(cartRef);
          const items = cartSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCartItems(items);
        } catch (error) {
          console.error("Error fetching cart items: ", error);
        }
      };

      fetchCartItems();
    }
  }, [user]);

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array to run only on component mount

  if (!user) {
    return <LoginPrompt showLogin={showLogin} setShowLogin={setShowLogin} />;
  }

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.discountedPrice.replace(/[^\d.-]/g, "")), // Convert to number
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg="gray.100"
      p={6}
      direction="column"
      mt="120px"
    >
      <Box
        textAlign="center"
        mt="0"
        background="white"
        w="full"
        p={6}
        borderRadius="lg"
        boxShadow="md"
      >
        <CartHeader />
        {cartItems.length === 0 ? (
          <EmptyCartMessage handleContinueShopping={handleContinueShopping} />
        ) : (
          <VStack spacing={4} align="stretch">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleRemoveItem={handleRemoveItem}
              />
            ))}

            <Box margin="auto" mb={10}>
              <Button
                sx={{ backgroundColor: "rgb(48, 137, 92)", color: "white" }}
                size="lg"
                rounded="full"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </Button>
            </Box>
            <CartSummary subtotal={subtotal} tax={tax} total={total} />
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default CartPage;
