import React from "react";
import { useBuilder } from "../context/BuilderContext";

export default function Canvas() {
  const { elements, setSelectedElement, selectedElement, addElement } = useBuilder();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        addElement("image", { src: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex-1 p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-auto"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Canvas</h2>
      <div className="min-h-[70vh] border-2 border-dashed border-gray-300 rounded-xl p-6 bg-white shadow-inner transition-all hover:border-blue-400">
        {elements.length === 0 ? (
          <div className="text-center text-gray-400 italic">
            Drag & drop an image or select elements from the sidebar.
          </div>
        ) : (
          elements.map((el) => (
            <div
              key={el.id}
              className={`p-4 mb-4 rounded-xl shadow-md bg-white transition-all cursor-pointer hover:shadow-lg ${
                selectedElement === el.id ? "ring-2 ring-blue-500" : "border border-gray-200"
              }`}
              onClick={() => setSelectedElement(el.id)}
            >
              {el.type === "text" && (
                <p className="text-gray-800 text-base">{el.props.text}</p>
              )}
              {el.type === "image" && (
                <img
                  src={el.props.src || "https://via.placeholder.com/150"}
                  alt=""
                  className="max-w-full h-auto rounded-lg"
                />
              )}
              {el.type === "button" && (
                <a
                  href={el.props.href}
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition"
                >
                  {el.props.text}
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
