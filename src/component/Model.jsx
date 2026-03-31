import { use } from "react";

const Model = ({ modelPromise }) => {
  const models = use(modelPromise);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Premium Digital Tools
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <button className="px-6 py-2 rounded-full text-white font-medium 
              bg-gradient-to-r from-purple-600 to-pink-500 shadow-md">
              Products
            </button>

            <button className="flex items-center gap-2 px-6 py-2 rounded-full 
              border border-gray-300 text-gray-700 bg-white">
              🛒 Cart (2)
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-2xl">{model.icon}</div>

                {model.tag && (
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${
                        model.tag === "Best Seller"
                          ? "bg-yellow-100 text-yellow-600"
                          : model.tag === "Popular"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-green-100 text-green-600"
                      }`}
                  >
                    {model.tag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {model.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">
                {model.description}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-800">
                  ${model.price}
                </span>
                <span className="text-sm text-gray-400">
                  /{model.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {model.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full py-2.5 rounded-full text-white font-medium 
                bg-gradient-to-r from-purple-600 to-pink-500 
                hover:from-purple-700 hover:to-pink-600 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Model;