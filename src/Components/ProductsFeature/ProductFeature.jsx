import React from "react";

const ProductFeature = ({ feature }) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <svg
          className="w-4 h-4 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2" 
          viewBox="0 0 21 21"
        >
          <path
            d="M3 14l5 4L19 9"
          />
        </svg>
        <p className="flex gap-2 text-[16px]">{feature}</p>
      </div>
    </div>
  );
};

export default ProductFeature;
