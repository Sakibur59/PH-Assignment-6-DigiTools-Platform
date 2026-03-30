import React from "react";

const Products = ({productData}) => {
    
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {
        productData.map((product) => <div className="">
      <figure>
        <img src="" alt="Shoes" />
      </figure>
      <div className="card-body">
        <span className=" bg-[#FEF3C6] text-[#BB4D00] badge ml-60">{product.tagType}</span>
        <h2 className="card-title">{product.name}</h2>
        <p className="text-[#627382]">
          {product.description}
        </p>
        <p className="font-bold text-2xl">
          ${product.price}/<span className="text-[#627382] text-[16px]">Mo</span>
        </p>
        <ul>

        <li>{product.features}</li>
        </ul>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>)
    }
    </div>
    
  );
};

export default Products;
