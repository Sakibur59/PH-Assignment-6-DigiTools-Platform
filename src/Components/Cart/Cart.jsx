import React from "react";
import { IoCart } from "react-icons/io5";
import { toast } from "react-toastify";

const Cart = ({ selectedProduct, setSelectedProduct }) => {
  const totalPrice = selectedProduct.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setSelectedProduct([]);
    if (selectedProduct.length > 0) {
      toast.success("Payment Successful");
    }
  };

  const handleDeleteSelectedProduct = (product) => {
    const filterProduct = selectedProduct.filter(
      (selected) => product.name !== selected.name,
    );
    toast.warning(`${product.name} is removed`);
    setSelectedProduct(filterProduct);
  };

  return (
    <div>
      <div className="space-y-4 shadow rounded-xl p-6">
        <h1 className="font-bold">Your Cart</h1>
        {selectedProduct.length === 0 ? (
          <div>
            <div className="flex justify-center items-center flex-col gap-2 h-100 ">
              <span className="text-5xl">
                <IoCart />
              </span>
              <p className="text-[#627382]">Your Cart is Empty</p>
            </div>
          </div>
        ) : (
          selectedProduct.map((product, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-3 rounded-2xl border p-4"
              >
                <div className="flex items-center gap-6">
                  <img src={product.icon} className="h-10 w-auto rounded-md" />
                  <div>
                    <h2 className="flex items-center gap-2 font-semibold text-xl">
                      {" "}
                      {product.name}
                    </h2>
                    <p className="text-[#627382]">${product.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteSelectedProduct(product)}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}

        <div>
          {
            selectedProduct.length>0 && (<div className="flex justify-between">
            <div className="text-[#627382]">Total:</div>
            <div className="text-[#101727] text-2xl">${totalPrice}</div>
          </div>)
          }
        </div>
        {
          selectedProduct.length > 0 && (<button
          onClick={handleCheckout}
          className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full"
        >
          Proceed to Checkout
        </button>)
        }
      </div>
    </div>
  );
};

export default Cart;
