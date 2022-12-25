import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
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

  const deleteFeedbackFromDB = (id) => {
    fetch(`http://localhost:4000/feedbacks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  function deleteFeedback(clickedId) {
    //console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
      deleteFeedbackFromDB(clickedId);
    }
  }

  const updateFeedback = () => {
    fetch("http://localhost:4000/feedbacks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //DO IT YOURSELF
  };

  function addFeedback(newFeedback) {
    //console.log(newFeedback);
    setFeedback([...feedback, newFeedback]); //Getting all the values using spread operator
  }

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{ feedback, createFeedback, deleteFeedback, addFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
