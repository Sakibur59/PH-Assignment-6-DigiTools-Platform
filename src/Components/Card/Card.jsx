import React, { useState } from "react";
import ProductFeature from "../ProductsFeature/ProductFeature";


const Card = ({ product }) => {
  const [isBye, setIsBye] = useState(false);
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
          <span className="text-[#627382] text-[16px]">Mo</span>
        </p>

        <div>
            
          {product.features.map((feature, index) => (
            <ProductFeature key={index} feature={feature}></ProductFeature>
          ))}
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => setIsBye(true)}
            className="btn btn-primary w-full"
          >
            {isBye ? "Added to Cart" : "Bye Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
