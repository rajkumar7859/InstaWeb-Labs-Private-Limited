import React from "react";
import { useBuilder } from "../context/BuilderContext";

const elements = [
  { type: "text", label: "📝 Text" },
  { type: "image", label: "🖼️ Image" },
  { type: "button", label: "🔘 Button" },
];

const Sidebar = () => {
  const { addElement } = useBuilder();

  return (
    <div className="w-1/5 p-6 bg-gradient-to-b from-gray-100 to-white rounded-l-3xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">🧱 Elements</h2>
      <div className="space-y-3">
        {elements.map((el) => (
          <button
            key={el.type}
            onClick={() => addElement(el.type)}
            className="w-full flex items-center gap-2 px-4 py-2 text-left text-gray-700 bg-white rounded-lg shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-gray-200 hover:border-blue-400"
          >
            <span className="text-lg">{el.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
