import { useState } from "react";
import Header from "./components/common/Header";
import { feedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/common/Card";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackRating from "./components/FeedbackRating";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  function deleteFeedback(clickedId) {
    //console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
    }
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    //console.log(newFeedback);
    setFeedback([...feedback, newFeedback]); //Getting all the values using spread operator
  }
  return (
    <>
      {/* <Header text="Hello" />
      <Card bgColor="purple">
        <div>Welcome</div>
      </Card>
      <Card bgColor="blue"> */}
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      {/* </Card> */}
    </>
  );
}

export default App;
