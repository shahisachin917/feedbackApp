import PropTypes from "prop-types";
import React from "react";
import Feedback from "./Feedback";

function FeedbackList({ feedback = [] }) {
  return (
    <div>
      {feedback.map((item) => (
        <Feedback key={item.id} item={item} />
      ))}
    </div>
  );
}

// Feedback.propTypes = {
//   feedback: PropTypes.array,
// };
export default FeedbackList;
