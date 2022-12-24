import React from "react";
import Feedback from "./Feedback";
import Card from "./common/Card";

function FeedbackList({ feedback, deleteFeedback }) {
  // 0, '', undefined, null, false, Nan
  return (
    <div>
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}

// Feedback.propTypes = {
//   feedback: PropTypes.array,
// };
export default FeedbackList;
