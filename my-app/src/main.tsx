// main.tsx
import React from "react"; // Added React import for standard practice
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Use ReactDOM.createRoot and wrap App in StrictMode
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
