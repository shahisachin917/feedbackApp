import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FeedbackContext } from "./context/FeedbackContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FeedbackContext.Provider>
    <App />
  </FeedbackContext.Provider>
);
