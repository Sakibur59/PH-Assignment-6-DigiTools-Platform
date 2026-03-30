import React from "react";
import tikImg from "../../assets/products/Vector.png";
import tikImgWhite from "../../assets/products/Vector white.png"
const PricingCard = () => {
  return (
    <div className="py-30 ">
      <div className="text-center">
        <h1 className="font-bold text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-[#627382] pt-4 ">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
          
        </p>
        
      </div>
      <div className="grid grid-cols-3 max-w-300 mx-auto gap-6 mt-10 ">
        <div className="card bg-[#F9FAFC]  shadow-sm p-5 space-y-4">
          <div className="">
            <h2 className="font-bold text-[24px]">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
          </div>
          <p className="font-bold text-4xl">
            $0<span className="text-[#627382] text-[16px]">/Month</span>
          </p>
          <div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Access to 10 free tools</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Basic templates</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Community support</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>1 project per month</p>
            </div>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full">
            Get Started Free
          </button>
        </div>
        <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA]  shadow-sm p-5 space-y-4 relative">
          <div className="absolute left-40 -top-4">
             <span className="badge badge-xs badge-warning bg-[#FEF3C6] border-none text-[#BB4D00] p-3 rounded-full">Most Popular</span>
          </div>
          <div className="">
            <h2 className="font-bold text-[24px] text-white">Pro</h2>
            <p className="text-[#FFFFFF]">Best for professionals</p>
          </div>
          <p className="font-bold text-4xl text-[#FFFFFF]">
            $29<span className="text-[#FFFFFF] text-[16px]">/Month</span>
          </p>
          <div>
            <div className="flex items-center text-[#FFFFFF] gap-3">
              <img src={tikImgWhite} alt=""  />
              <p>Access to all premium tools</p>
            </div>
            <div className="flex items-center text-white gap-3">
              <img src={tikImgWhite} alt="" />
              <p>Unlimited templates</p>
            </div>
            <div className="flex items-center text-white gap-3">
              <img src={tikImgWhite} alt="" />
              <p>Priority support</p>
            </div>
            <div className="flex items-center text-white gap-3">
              <img src={tikImgWhite} alt="" />
              <p>Unlimited projects</p>
            </div>
            <div className="flex items-center text-white gap-3">
              <img src={tikImgWhite} alt="" />
              <p>Cloud sync</p>
            </div>
            <div className="flex items-center text-white gap-3">
              <img src={tikImgWhite} alt="" />
              <p>Advanced analytics</p>
            </div>
          </div>
          <button className="btn bg-white text-purple-500 rounded-full w-full">
            Start Pro Trial
          </button>
        </div>
        <div className="card bg-[#F9FAFC]  shadow-sm p-5 space-y-4">
          <div className="">
            <h2 className="font-bold text-[24px]">Enterprise</h2>
            <p className="text-[#627382]">For teams and businesses</p>
          </div>
          <p className="font-bold text-4xl">
            $99<span className="text-[#627382] text-[16px]">/Month</span>
          </p>
          <div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Everything in Pro</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Team collaboration</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Custom integrations</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Dedicated support</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Dedicated support</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={tikImg} alt="" />
              <p>Custom branding</p>
            </div>
          </div>
          <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-full">
            Contact Sales
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default PricingCard;
