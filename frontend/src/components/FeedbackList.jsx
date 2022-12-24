import React from "react";
import Feedback from "./Feedback";
import Card from "./common/Card";
import Spinner from "./common/Spinner";

function FeedbackList({ feedback, deleteFeedback }) {
  // 0, '', undefined, null, false, Nan
  return (
    <div>
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => (
          <Feedback key={item.id} item={item} deleteFeedback={deleteFeedback} />
        ))
      ) : (
        //This was something we did earlier using CSS
        // <div className="loaderWrapper">
        //   <div className="loader"></div>
        // </div>
        <Spinner />
      )}
    </div>
  );
}

// Feedback.propTypes = {
//   feedback: PropTypes.array,
// };
export default FeedbackList;
