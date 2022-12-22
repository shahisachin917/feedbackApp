import { useState } from "react";
import Card from "./common/Card";
import FeedbackRating from "./FeedbackRating";

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(0);

  function handleChange(e) {
    if (text === "") {
      setErrorMessage(null);
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length < 10) {
      setErrorMessage("Your text should be greater than 10 characters");
      setIsDisabled(true);
    } else {
      setErrorMessage(null);
      setIsDisabled(false);
    }
    setText(e.target.value);
  }

  function grabRating(inputRating) {
    setRating(inputRating);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addFeedback({ text, rating });
  }

  return (
    <Card>
      <h3>Input your feedback!</h3>
      <FeedbackRating grabRating={grabRating} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Input your feedback!"
          value={text}
        />
        <button disabled={isDisabled}>Submit</button>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      <h1>{text}</h1>
    </Card>
  );
}

export default FeedbackForm;
