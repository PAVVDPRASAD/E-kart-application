import React, { useState } from 'react';
import { useCart } from "../context/CartContext";

const PaymentPopup = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { state, dispatch } = useCart();

  const subtotal = state.cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const quantity = state.cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const handleConfirmBtn = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
    }, 2000); // Reset after 2 seconds
    
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg">
      <h1 className="font-bold text-2xl mb-6">Payment Details</h1>

      {orderPlaced ? (
        <div className="text-center">
          <p className="text-lg font-semibold text-green-600">
             Your order has been placed successfully!
          </p>
        </div>
      ) : (
        <>
          <p className="font-semibold text-lg mb-4">Payment Methods</p>
          <div className="grid grid-cols-1 gap-2 mb-6">
            {["Card", "Net Banking", "UPI", "Wallet", "Cash On Delivery"].map((method, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  disabled={method !== "Cash On Delivery"}
                  defaultChecked={method === "Cash On Delivery"}
                />
                <span>{method}</span>
              </label>
            ))}
          </div>

          <div className="w-full text-left mb-6">
            <p className="font-medium">Order Details:</p>
            <p>Quantity: <span className="font-semibold">{quantity}</span></p>
            <p>Total Price: <span className="font-bold text-blue-600">₹{subtotal}/-</span></p>
          </div>

          <button
            onClick={handleConfirmBtn}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentPopup;
