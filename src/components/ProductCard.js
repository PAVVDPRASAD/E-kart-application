import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title.slice(0, 30)}...</h2>
      <p className="text-blue-600 font-bold">₹{product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;