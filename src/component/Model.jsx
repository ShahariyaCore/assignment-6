import { use } from "react";
import ModelCard from "./modelCard";

const Model = ({ modelPromise, onAddToCart, cartItems }) => {
  const models = use(modelPromise);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard 
              key={model.id} 
              model={model} 
              onAddToCart={onAddToCart}   // 🔥 important
              cartItems={cartItems}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Model;