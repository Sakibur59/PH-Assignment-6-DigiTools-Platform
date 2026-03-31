import React from 'react';
import { IoCart } from 'react-icons/io5';

const Cart = ({selectedProduct,setselectedProduct}) => {
     return (
    <div>
        <div className="space-y-4 shadow rounded-xl p-6">
            <h1 className='font-bold'>Your Cart</h1>
      {selectedProduct.length === 0 ? 
        <div>
      <div className="flex justify-center items-center flex-col gap-2 h-100 ">
        <span className='text-5xl'><IoCart /></span>
        <p className='text-[#627382]'>Your Cart is Empty</p>
      </div>
        </div>
      
      : selectedProduct.map((product, index) => {
        return <div key={index} className="flex items-center justify-between gap-3 rounded-2xl border p-4">
          <div className="flex items-center gap-6" >
            <img src={product.icon}   className="h-10 w-auto rounded-md"/>
          <div>
            <h2 className="flex items-center gap-2 font-semibold text-xl"> {product.name}</h2>
            <p>{product.description}</p>
          </div>
          </div>
          {/* <button className="btn text-red-500" onClick={()=>handleDeleteSelectedProduct(product)}>
            <MdDelete></MdDelete>
          </button> */}
        </div>;
      })}
    </div>
    </div>
  );
};

export default Cart;