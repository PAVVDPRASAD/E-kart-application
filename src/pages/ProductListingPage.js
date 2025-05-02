import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import ClipLoader from "react-spinners/ClipLoader";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);


  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setProducts(filteredProducts);
  }

  const handleFilter = (e) => {
    const filtervalue = e.target.value.toLowerCase();
    if (filtervalue === "all") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } else {
      const filteredProducts = products.filter((product) =>
        product.category === filtervalue
      );
      setProducts(filteredProducts);
    }
  }

  return (
    <div>
      <Header />
      <div className="flex flex-row justify-around items-center w-full bg-gray-200 h-16 shadow-md">
        <h1 className="text-xl font-semibold">Product Listing</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded w-full max-w-md mx-4 my-4 mlg-4 border-gray-300 shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
          onChange={handleSearch}
        />
        <select className="border p-2 rounded w-[150px] max-w-md mx-4 my-4  border-gray-300 shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-400" 
        onChange={(e) => {handleFilter(e)}}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>    
        </select>
      </div>
      <div>
        {loading ? (
          <div className="flex flex-row justify-center items-center w-full">
            <ClipLoader color="black" loading={true} size={50} />
          </div>
        ) : (
          products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center w-full bg-gray-200 h-screen">
              <img src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/web_1280___8_4x.jpg" alt="No products found" className="w-1/2 round-lg" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;