import React from "react";
import ReactDOM from "react-dom/client";
import { HackerNewsApp } from "./components/HackerNewsApp/HackerNewsApp";
import { HackerNewsAppProvider } from "./context/HackerNewsAppContext";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HackerNewsAppProvider>
      <HackerNewsApp />
    </HackerNewsAppProvider>
  </React.StrictMode>
);
