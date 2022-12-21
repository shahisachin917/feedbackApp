import { useState } from "react";

function FeedbackForm() {
  const [text, setText] = useState();
  return (
    <div>
      <h3>Input your feedback!</h3>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Input your feedback!"
          //   value={text}
        />
        <button>Submit</button>
      </form>
      <h1>{text}</h1>
    </div>
  );
}

export default FeedbackForm;
