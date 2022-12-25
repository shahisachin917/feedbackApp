import { useContext, useState } from "react";
import Button from "./common/Button";
import Card from "./common/Card";
import FeedbackRating from "./FeedbackRating";
import { v4 as uuidv4 } from "uuid";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, createFeedback } = useContext(FeedbackContext);
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

    const newFeedback = { text, rating, id: uuidv4() };

    addFeedback(newFeedback); //This will send data to UI in real time so we don't have to refresh it
    createFeedback(newFeedback);

    setText("");
    setIsDisabled(true);

    //TODO
    //clear input rating as well
  }

  return (
    <Card>
      <h3>Input your feedback!</h3>
      <FeedbackRating grabRating={grabRating} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Input your feedback!"
            value={text}
          />
          <Button isDisabled={isDisabled}>Submit</Button>
        </div>
      </form>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      <h1>{text}</h1>
    </Card>
  );
}

export default FeedbackForm;
