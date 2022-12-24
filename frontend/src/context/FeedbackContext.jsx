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

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
