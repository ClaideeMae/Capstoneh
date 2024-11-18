import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbFilterSearch } from "react-icons/tb";
import { GoChevronDown } from "react-icons/go";

const ProductGrid = () => {
  const [sortOption, setSortOption] = useState("Relevance");
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Parrot man guro ni",
      price: 5000,
      rating: 4.5,
      sold: "5K",
      location: "Dapitan, Cordova, Cebu",
      image: "Image4.jpg",
      shippingTime: "3-5 Days",
      fastShipping: true,
    },
    {
      id: 2,
      name: "Feel naku lovebirds ni kay nag lab",
      price: 1000,
      location: "Dapitan, Cordova, Cebu",
      image: "Image5.jpg",
    },
    {
      id: 3,
      name: "cockatiel",
      price: 2000,
      location: "Dapitan, Cordova, Cebu",
      image: "Image6.jpg",
    },
    {
      id: 4,
      name: "murag bird ni nga mo esturyag maygelukdo si elieser mae",
      price: 6000,
      location: "Dapitan, Cordova, Cebu",
      image: "Image7.jpg",
    },
    {
      id: 5,
      name: "Nindot ni",
      price: 3000,
      location: "Dapitan, Cordova, Cebu",
      image: "Image8.jpg",
    },
    {
      id: 6,
      name: "Mo esturya ni",
      price: 5000,
      location: "Dapitan, Cordova, Cebu",
      image: "Image4.jpg",
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Price: Low to High") return a.price - b.price;
    if (sortOption === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  const togglePriceDropdown = () => {
    setIsPriceDropdownOpen(!isPriceDropdownOpen);
  };

  return (
    <div className="flex p-4 bg-gray-100">
      <div className="w-1/4 p-4 bg-white rounded shadow-md mr-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <TbFilterSearch className="mr-2" />
          SEARCH FILTER
        </h2>

        <div className="mb-4">
          <h3 className="font-medium mb-2">By Category</h3>
          <div className="space-y-2">
            {["cockatiel", "cockatiel", "Cockatiel", "cockatiel"].map(
              (category, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>{category}</span>
                </div>
              )
            )}
          </div>
          <div className="flex items-center mt-2">
            <GoChevronDown className="text-blue-500 mr-1" />
            <button className="text-blue-500 text-sm">More</button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center">
                <span className="text-yellow-500">
                  {"★".repeat(stars) + "☆".repeat(5 - stars)}
                </span>
                <span className="ml-2 text-sm">& Up</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Min"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Max"
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded">
            APPLY
          </button>
        </div>

        <div>
          <h3 className="font-medium mb-2">Shipped From</h3>
          <div>
            <input type="checkbox" className="mr-2" />
            <span>Domestic</span>
          </div>
          <div>
            <input type="checkbox" className="mr-2" />
            <span>International</span>
          </div>
        </div>
      </div>

      <div className="w-3/4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">
            Search result for "<span className="font-semibold">cockatiel</span>"
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Sort by:</span>
            <button
              onClick={() => setSortOption("Relevance")}
              className={`text-sm px-2 py-1 ${
                sortOption === "Relevance" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Relevance
            </button>
            <button
              onClick={() => setSortOption("Latest")}
              className={`text-sm px-2 py-1 ${
                sortOption === "Latest" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setSortOption("Top Sales")}
              className={`text-sm px-2 py-1 ${
                sortOption === "Top Sales" ? "bg-blue-500 text-white" : ""
              }`}
            >
              Top Sales
            </button>
            <div className="relative">
              <button
                onClick={togglePriceDropdown}
                className="flex items-center text-sm px-2 py-1"
              >
                Price <RiArrowDropDownLine className="ml-1 text-xl" />
              </button>
              {isPriceDropdownOpen && (
                <div className="absolute right-0 bg-white border rounded shadow-lg mt-2 w-40 z-10">
                  <button
                    onClick={() => {
                      setSortOption("Price: Low to High");
                      setIsPriceDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-left text-sm w-full hover:bg-gray-100"
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOption("Price: High to Low");
                      setIsPriceDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-left text-sm w-full hover:bg-gray-100"
                  >
                    Price: High to Low
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-lg font-bold text-orange-500">
                ${product.price}
              </p>
              <p className="text-xs text-gray-500">{product.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
