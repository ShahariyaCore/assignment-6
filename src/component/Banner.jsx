import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
            ✨ New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black">
            Supercharge Your <br className="hidden sm:block" />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            
            <button className="px-6 py-3 rounded-full text-white font-medium 
              bg-gradient-to-r from-purple-600 to-pink-500 
              hover:from-purple-700 hover:to-pink-600 
              transition-all duration-300 shadow-md">
              Explore Products
            </button>

          <button className="flex items-center gap-3 px-6 py-3 rounded-full font-medium text-black border-2 border-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-white hover:shadow-lg transition-all duration-300">
  <i className="fa-solid fa-play"></i>
  Watch Demo
</button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl rounded-3xl"
            src={BannerImage}
            alt="AI Models Banner"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;