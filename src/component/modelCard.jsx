import { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, onAddToCart, cartItems = [] }) => {
  const [isBuying, setIsBuying] = useState(false);
  const isAdded = isBuying || cartItems.some((item) => item.id === model.id);

  const handleBuy = () => {
    if (isAdded) return;
    setIsBuying(true);
    toast.success(`${model.name} added to cart!`);
    onAddToCart(model); // send data to parent
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">
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
      <p className="text-gray-500 text-sm mb-4">{model.description}</p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-800">
          ${model.price}
        </span>
        <span className="text-sm text-gray-400">/{model.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {model.features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 flex items-center gap-2"
          >
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleBuy}
        disabled={isAdded}
        className="w-full py-2.5 rounded-full text-white font-medium 
        bg-linear-to-r from-purple-600 to-pink-500 
        hover:from-purple-700 hover:to-pink-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isAdded ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;
