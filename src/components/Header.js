import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";

const Header = () => {
  const { state } = useCart()
  return (
    <nav className="flex text-lg justify-between items-center p-4 shadow-lg bg-white-200">
      <Link to="/">
        <img src='/logo 64X64.jpg' alt="website-logo" className='lg:w-[120px] w-[80px]  rounded-full' />
      </Link>
      <ul className="hidden md:flex md:justify-around md:items-center ">
        <li className="pr-4 hover:text-blue-800 hover:font-bold transition-all duration-300">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="pr-4 hover:text-blue-800 hover:font-bold transition-all duration-300">
          <Link to="/products" className="">
            Products
          </Link>
        </li>
        <li className="relative group">
          <Link 
            to="/cart" 
            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-200 hover:text-blue-800 hover:font-bold"
          >
            Cart
            {state.cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {state.cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
      {/* Mobile View */}
      <ul className=" flex justify-around items-center md:hidden ">
        <li className="pr-4 hover:text-blue-800 hover:font-bold transition-all duration-300">
          <Link to="/" className="">
            <FaHome className="text-xl" />
          </Link>
        </li>
        <li className="pr-4 hover:text-blue-800 hover:font-bold transition-all duration-300">
          <Link to="/products" className="">
            <BiSolidCategoryAlt className="text-xl" />
          </Link>
        </li>
        <li className="relative group">
          <Link 
            to="/cart" 
            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:text-blue-800 hover:font-bold"
          >
            <FaShoppingCart className="text-xl text-gray-700 group-hover:text-blue-600" />
            {state.cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {state.cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}


export default Header