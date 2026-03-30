import React, { use, useState } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const AllProducts = ({ productsPromise }) => {
  const productData = use(productsPromise);
  console.log(productData)
  const [selectedType, setSelectedType] = useState("product");
  const [selectedProduct, setSelectedProduct] = useState([]);
  return (
    <div className="max-w-300 mx-auto my-4 mt-40">
      <div className="text-center mb-10 space-y-4">
        <h1 className="font-extrabold text-5xl">Premium Digital Tools</h1>
        <p className="text-[#627382] w-135 mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div>
          <button
            onClick={() => setSelectedType("product")}
            className={`btn ${selectedType === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "text-[#627382]"} rounded-r-none rounded-full px-10`}
          >
            Products
          </button>
          <button
            onClick={() => setSelectedType("cart")}
            className={`btn ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : " text-[#627382]"} rounded-l-none rounded-full px-10`}
          >
            Cart
            ({selectedProduct.length})
          </button>
        </div>
      </div>
      {selectedType === "product" ? (
        <Products productData={productData}></Products>
      ) : (
        <Cart></Cart>
      )}
    </div>
  );
};

export default AllProducts;
