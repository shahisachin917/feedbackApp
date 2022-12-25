import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import { feedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/common/Card";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackRating from "./components/FeedbackRating";
import FeedbackStats from "./components/common/FeedbackStats";

function App() {
  return (
    <div className="container">
      <Header text="Feedback App"></Header>
      <FeedbackForm />
      <FeedbackList />
      <FeedbackStats />
      {/* </Card> */}
    </div>
  );
}

export default App;
