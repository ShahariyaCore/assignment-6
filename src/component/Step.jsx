import userIcon from "../assets/user.png"; // adjust path
import packageIcon from "../assets/package.png";
import playIcon from "../assets/Play.png";

const Step = () => {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Get Started In 3 Simple Steps
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="relative group bg-white border-2 border-gray-200 rounded-3xl p-8 pt-16 hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
              01
            </div>

            <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
              <img src={userIcon} alt="Create account" className="w-12 h-12" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Create Account
            </h3>
            <p className="mt-3 text-gray-500 text-sm">
              Sign up in seconds. No credit card required.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-white border-2 border-gray-200 rounded-3xl p-8 pt-16 hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
              02
            </div>

            <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
              <img src={packageIcon} alt="Choose products" className="w-12 h-12" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Choose Products
            </h3>
            <p className="mt-3 text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-white border-2 border-gray-200 rounded-3xl p-8 pt-16 hover:shadow-xl transition duration-500 transform hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
              03
            </div>

            <div className="w-24 h-24 mx-auto rounded-full bg-purple-100 flex items-center justify-center shadow-inner">
              <img src={playIcon} alt="Start creating" className="w-12 h-12" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Start Creating
            </h3>
            <p className="mt-3 text-gray-500 text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Step;