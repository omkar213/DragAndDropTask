import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
