import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
import { BuilderProvider } from "./context/BuilderContext"; 
export default function App() {
  return (
    <BuilderProvider>
      <div className="flex h-auto shadow-custom-glow rounded-3xl ">
        <Sidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </BuilderProvider>
  );
}