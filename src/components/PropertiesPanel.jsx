import { useBuilder } from "../context/BuilderContext";

const PropertiesPanel = () => {
  const { elements, selectedElement, updateElement } = useBuilder();
  const element = elements.find((el) => el.id === selectedElement);

  if (!element) {
    return (
      <div className="w-1/5 p-6 bg-gray-50 rounded-r-3xl flex items-center justify-center text-gray-400 italic">
        No element selected
      </div>
    );
  }

  const handleChange = (e) => {
    updateElement(element.id, { [e.target.name]: e.target.value });
  };

  return (
    <div className="w-1/5 p-6 bg-gray-50 rounded-r-3xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Properties</h2>

      {(element.type === "text" || element.type === "button") && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Text</label>
          <input
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            name="text"
            value={element.props.text || ""}
            onChange={handleChange}
            placeholder="Enter text"
          />
        </div>
      )}

      {element.type === "image" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            name="src"
            value={element.props.src || ""}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </div>
      )}

      {element.type === "button" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
          <input
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            name="href"
            value={element.props.href || ""}
            onChange={handleChange}
            placeholder="Enter link URL"
          />
        </div>
      )}
    </div>
  );
};

export default PropertiesPanel;
