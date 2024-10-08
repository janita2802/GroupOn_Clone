import React from "react";
import { Box, Button } from "@chakra-ui/react";

const CartSummary = ({ subtotal, tax, total }) => (
  <Box border="1px" borderColor="gray.300" rounded="lg" p={4}>
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="border p-4 rounded mb-6">
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-bold">${parseFloat(subtotal || 0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Tax (10%)</p>
          <p className="font-bold">${parseFloat(tax || 0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Total</p>
          <p className="font-bold">${parseFloat(total || 0).toFixed(2)}</p>
        </div>
      </div>
    </section>

    <section className="mb-6">
      <Button
        sx={{ backgroundColor: "black", color: "white" }}
        size="lg"
        rounded="full"
        w={"100px"}
      >
        Buy Now
      </Button>
    </section>

    <footer className="text-center text-gray-600 text-sm mt-6">
      <p>
        By clicking "Buy Now", I agree to the Terms of Sale and Refund Policy
        and have read the Privacy Statement.
      </p>
      <p className="mt-4">
        Need more help? Visit our{" "}
        <a href="#" className="text-green-600">
          Help Center
        </a>{" "}
        or{" "}
        <a href="#" className="text-green-600">
          Contact Us
        </a>
        .
      </p>
      <p className="mt-4">© 2023 Groupon, Inc. All Rights Reserved.</p>
    </footer>
  </Box>
);

export default CartSummary;
