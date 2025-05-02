import React from "react";
import Header from "../components/Header";
import PaymentPopUp from "../components/PaymentPopUp";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const FullCartPage = () => {
  const { state, dispatch } = useCart();
  const subtotal = state.cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>
      <Header />
      <div className="p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {state.cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://img.freepik.com/premium-psd/empty-cart-shopping-commerce-3d-illustration_66255-2017.jpg"
              alt="Empty Cart"
              className="mb-4 md:w-[400px] sm:w-[300px]"
            />
            <p>Your cart is empty.</p>
            <Link
              to="/products"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Go to Products
            </Link>
          </div>
        ) : (
          <div>
            {state.cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex md:flex-row flex-col justify-between w-full lg:mr-8">
                  <p className="w-[200px] lg:w-1/2">{item.title}</p>
                  <div className="flex items-center">
                    <button
                      className="text-gray-700 text-xl"
                      onClick={() =>
                        dispatch({
                          type: "DECREASE_QUANTITY",
                          payload: item.id,
                        })
                      }
                    >
                      -
                    </button>
                    <span className="text-lg mx-3 font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button
                      className="text-gray-700 text-xl"
                      onClick={() =>
                        dispatch({
                          type: "INCREASE_QUANTITY",
                          payload: item.id,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold">
                    ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                  className="text-red-400"
                >
                  <MdOutlineCancel size={20} />
                </button>
              </div>
            ))}

            <div className="mt-9 flex justify-between items-center border-t pt-4">
              <p className="text-lg font-bold">
                Subtotal: ₹{subtotal.toFixed(2)}
              </p>

              <Popup
                modal
                trigger={
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition font-semibold">
                    Proceed
                  </button>
                }
                closeOnDocumentClick
              >
                {(close) => (
                  <div className="opacity-100 bg-white p-6 rounded-lg shadow-md w-[300px] md:w-[400px] lg:w-full mx-auto">
                    <h2 className="text-lg font-bold mb-4">Payment</h2>
                    <PaymentPopUp />
                    <button
                      onClick={close}
                      className="mt-6 bg-red-300 px-4 py-2 rounded hover:bg-red-600"
                    >
                      Close
                    </button>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullCartPage;
