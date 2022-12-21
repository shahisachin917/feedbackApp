import { useState } from "react";
import Header from "./components/common/Header";
import { feedbackData } from "./components/data/FeedbackData";
import FeedbackList from "./components/common/FeedbackList";
import Card from "./components/common/Card";
import FeedbackForm from "./components/common/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  function deleteFeedback(clickedId) {
    //console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
    }
  }
  return (
    <>
      {/* <Header text="Hello" />
      <Card bgColor="purple">
        <div>Welcome</div>
      </Card>
      <Card bgColor="blue"> */}
      <FeedbackForm />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      {/* </Card> */}
    </>
  );
}

export default App;
