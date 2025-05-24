import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

const BuilderContext = createContext();

export const BuilderProvider = ({ children }) => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const addElement = (type, customProps = {}) => {
    const id = nanoid();
    const newEl = {
      id,
      type,
      props: {
        text: "Sample Text",
        src: "",
        href: "#",
        ...customProps, // this enables adding dropped images
      },
    };
    setElements((prev) => [...prev, newEl]);
    setSelectedElement(id);
  };

  const updateElement = (id, props) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, props: { ...el.props, ...props } } : el
      )
    );
  };

  return (
    <BuilderContext.Provider
      value={{
        elements,
        addElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export const useBuilder = () => useContext(BuilderContext);
