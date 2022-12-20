import React from "react";
import Header from "./components/common/Header";
import { feedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/common/FeedbackList";

function App() {
  return (
    <div>
      <Header text="Hello" />
      <FeedbackList feedback={feedbackData} />
    </div>
  );
}

export default App;
