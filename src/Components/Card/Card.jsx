import React, { useState } from "react";
import ProductFeature from "../ProductsFeature/ProductFeature";
import { toast } from "react-toastify";

const Card = ({ product,selectedProduct, setSelectedProduct}) => {
  const [isBye, setIsBye] = useState(false);
  const handleChooseProduct = () => {
    setIsBye(true);

    const isAdded = selectedProduct.find(item => item.id === product.id) ;

    if(isAdded){
      toast.error("Item Already in Cart");
      return;
    } else{
      toast.success(`${product.name} is selected`);
    }

    setSelectedProduct([...selectedProduct,product])
  };

  return (
    <div className="shadow rounded-md relative">
      <div className="absolute top-1 right-3">
        <span
          className={`px-3 py-2 rounded-full  ${
            product.tagType === "popular"
              ? "bg-[#E1E7FF] text-purple-600 "
              : product.tagType === "new"
                ? "bg-[#DBFCE7] text-[#0A883E]"
                : product.tagType == "best-seller"
                  ? "bg-[#FEF3C6] text-[#BB4D00]"
                  : ""
          }`}
        >
          {product.tagType}
        </span>
      </div>
      <figure className="mt-8">
        <img src={product.icon} alt="" className="ml-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-[#627382]">{product.description}</p>
        <p className="font-bold text-2xl">
          ${product.price}/
          <span className="text-[#627382] text-[16px]">Month</span>
        </p>

        <div>
          {product.features.map((feature, index) => (
            <ProductFeature key={index} feature={feature}></ProductFeature>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={handleChooseProduct}
            className={`${isBye ? "btn bg-green-600 text-white rounded-full w-full" : "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full"}`}
          >
            {isBye ? "✓ Added to Cart" : "Bye Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
