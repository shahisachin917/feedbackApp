import { useState } from "react";

function FeedbackRating({ grabRating }) {
  const [rating, setRating] = useState(0);
  console.log(rating);

  function handleRatingInput(e) {
    console.log(e);
    setRating(+e.target.value); //Converts string to number with the + sign
    grabRating(+e.target.value); //Send the rating to the parent
  }
  return (
    <div>
      <ul>
        <input
          value={1}
          type="radio"
          onChange={handleRatingInput}
          id="numOne"
        />

        <label htmlFor="numOne">1</label>
      </ul>
      <ul>
        <input
          value={2}
          type="radio"
          onChange={handleRatingInput}
          id="numTwo"
        />
        <label htmlFor="numTwo">2</label>
      </ul>
      <ul>
        <input
          value={3}
          type="radio"
          onChange={handleRatingInput}
          id="numThree"
        />
        <label htmlFor="numThree">3</label>
      </ul>
      <ul>
        <input
          value={4}
          type="radio"
          onChange={handleRatingInput}
          id="numFour"
        />
        <label htmlFor="numFour">4</label>
      </ul>

      <ul>
        <input
          value={5}
          type="radio"
          onChange={handleRatingInput}
          id="numFive"
        />
        <label htmlFor="numFive">5</label>
      </ul>

      <ul>
        <input
          value={6}
          type="radio"
          onChange={handleRatingInput}
          id="numSix"
        />
        <label htmlFor="numSix">6</label>
      </ul>
      <ul>
        <input
          value={7}
          type="radio"
          onChange={handleRatingInput}
          id="numSeven"
        />
        <label htmlFor="numSeven">7</label>
      </ul>
      <ul>
        <input
          value={8}
          type="radio"
          onChange={handleRatingInput}
          id="numEight"
        />
        <label htmlFor="numEight">8</label>
      </ul>
      <ul>
        <input
          value={9}
          type="radio"
          onChange={handleRatingInput}
          id="numNine"
        />
        <label htmlFor="numNine">9</label>
      </ul>
      <ul>
        <input
          value={10}
          type="radio"
          onChange={handleRatingInput}
          id="numTen"
        />
        <label htmlFor="numTen">10</label>
      </ul>
    </div>
  );
}

export default FeedbackRating;
