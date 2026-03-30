import React from "react";
import profileImg from '../../assets/products/user.png'
import packageImg from '../../assets/products/package.png'
import rocketImg from '../../assets/products/rocket.png'
const Stepts = () => {
  return (
    <div className="bg-[#F9FAFC] py-30">
        <div className="text-center">
            <h1 className="font-bold text-5xl">Get Started in 3 Steps</h1>
            <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
        </div>
    <div className="grid grid-cols-3 max-w-300 mx-auto gap-6 mt-10 ">
        
      <div className="card bg-base-100  shadow-sm p-5 ">
         <span className="badge w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full ml-75">01</span>
        <figure>
            <div className="border rounded-full p-2 bg-purple-200 border-none">

          <img src={profileImg} alt="" width={70}/>
            </div>
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-[24px]">Create Account</h2>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-sm p-5">
         <span className="badge w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full ml-75">02</span>
        <figure>
            <div className="border rounded-full p-2 bg-purple-200 border-none">

          <img src={packageImg} alt="" width={70}/>
            </div>
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-[24px]">Choose Products</h2>
          <p className="text-[#627382]">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
      </div>
      <div className="card bg-base-100  shadow-sm p-5">
         <span className="badge w-10 h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full ml-75">03</span>
        <figure>
            <div className="border rounded-full p-3 bg-purple-200 border-none">

          <img src={rocketImg} alt="" width={70}/>
            </div>
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-[24px]">Start Creating</h2>
          <p className="text-[#627382]">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Stepts;
