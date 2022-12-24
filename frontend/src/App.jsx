import { useEffect, useState } from "react";
import Header from "./components/common/Header";
import { feedbackData } from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/common/Card";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackRating from "./components/FeedbackRating";
import FeedbackStats from "./components/common/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("http://localhost:4000/feedbacks");
      const data = await response.json();

      setFeedback(data);
    } catch (error) {
      console.log(e);
    }
  };

  const createFeedback = (newFeedback) => {
    fetch("http://localhost:4000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
  };

  const updateFeedback = () => {
    fetch("http://localhost:4000/feedbacks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //DO IT YOURSELF
  };

  const deleteFeedbackFromDB = () => {
    fetch("http://localhost:4000/feedbacks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //CRUD
  // Create: POST
  // Read: GET
  // Update: Put/PATCH
  // Delete: DELETE

  useEffect(() => {
    fetchFeedback();
  }, []);

  function deleteFeedback(clickedId) {
    //console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
    }
  }

  function addFeedback(newFeedback) {
    //console.log(newFeedback);
    setFeedback([...feedback, newFeedback]); //Getting all the values using spread operator
  }
  return (
    <div className="container">
      <Header text="Feedback App"></Header>
      <FeedbackForm addFeedback={addFeedback} createFeedback={createFeedback} />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      <FeedbackStats feedback={feedback} />
      {/* </Card> */}
    </div>
  );
}

export default App;
