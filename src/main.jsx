import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import { NameProvider } from "./context/NameContext.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";
export const server = "http://localhost:4000";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </UserContextProvider>
  </StrictMode>
);
