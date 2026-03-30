import React, { useState } from "react";

const Card = ({product}) => {
    const [isBye,setIsBye] = useState(false)
  return (
    <div className="shadow rounded-md">
        <span className=" bg-[#FEF3C6] text-[#BB4D00] badge ml-70">
          {product.tagType}
        </span>
      <figure>
        <img src={product.icon} alt="" className="ml-6"/>
      </figure>
      <div className="card-body">
        
        <h2 className="card-title">{product.name}</h2>
        <p className="text-[#627382]">{product.description}</p>
        <p className="font-bold text-2xl">
          ${product.price}/
          <span className="text-[#627382] text-[16px]">Mo</span>
        </p>
        <ul>
          <li>{product.features}</li>
        </ul>
        {/* {product.features.map((feature, index) => (
          <ProductsFeature key={index} feature={feature}></ProductsFeature>
        ))} */}
        <div className="card-actions justify-end">
          <button onClick={()=> setIsBye(true)} className="btn btn-primary w-full">{isBye ? "Added to Cart":"Bye Now"}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
