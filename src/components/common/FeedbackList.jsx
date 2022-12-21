import React from "react";
import Feedback from "./Feedback";
import Card from "./Card";

function FeedbackList({ feedback, deleteFeedback }) {
  // 0, '', undefined, null, false, Nan
  return (
    <Card bgColor="green">
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </Card>
  );
}

// Feedback.propTypes = {
//   feedback: PropTypes.array,
// };
export default FeedbackList;
