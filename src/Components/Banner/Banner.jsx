import { CiPlay1 } from "react-icons/ci";
import bannerImage from "../../assets/products/banner.png"
const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF]  text-sm font-medium px-5 py-2 rounded-full">
           
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-linear-to-r from-[#4f39f687] to-[#9614fa55]">
                <div className="w-4 h-4 bg-linear-to-r from-[#4f39f69d] to-[#9614fa62] rounded-full flex justify-center items-center">
                    <div className="w-2 h-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full"> </div>
                </div>
            </div>
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent"> <span className=""></span> New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
            Supercharge Your
            <br />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital Workflow</span>
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-8 py-4 rounded-full font-semibold  text-white">
              Explore Products
            </button>
            <button className="px-8 py-4 rounded-full font-semibold  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#9514FA] border-2 flex items-center">
              <span className="text-[#9514FA] mr-2"><CiPlay1 /></span>Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="w-100 h-122"
              src={bannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
