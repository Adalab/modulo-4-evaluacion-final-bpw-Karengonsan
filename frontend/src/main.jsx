import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import App from "./pages/App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </AuthProvider>
  </StrictMode>
);
