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
          name="rating"
          onChange={handleRatingInput}
          id="numOne"
          checked={rating === 1}
        />

        <label htmlFor="numOne">1</label>
      </ul>
      <ul>
        <input
          value={2}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numTwo"
          checked={rating === 2}
        />
        <label htmlFor="numTwo">2</label>
      </ul>
      <ul>
        <input
          value={3}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numThree"
          checked={rating === 3}
        />
        <label htmlFor="numThree">3</label>
      </ul>
      <ul>
        <input
          value={4}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numFour"
          checked={rating === 4}
        />
        <label htmlFor="numFour">4</label>
      </ul>

      <ul>
        <input
          value={5}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numFive"
          checked={rating === 5}
        />
        <label htmlFor="numFive">5</label>
      </ul>

      <ul>
        <input
          value={6}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numSix"
          checked={rating === 6}
        />
        <label htmlFor="numSix">6</label>
      </ul>
      <ul>
        <input
          value={7}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numSeven"
          checked={rating === 7}
        />
        <label htmlFor="numSeven">7</label>
      </ul>
      <ul>
        <input
          value={8}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numEight"
          checked={rating === 8}
        />
        <label htmlFor="numEight">8</label>
      </ul>
      <ul>
        <input
          value={9}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numNine"
          checked={rating === 9}
        />
        <label htmlFor="numNine">9</label>
      </ul>
      <ul>
        <input
          value={10}
          type="radio"
          name="rating"
          onChange={handleRatingInput}
          id="numTen"
          checked={rating === 10}
        />
        <label htmlFor="numTen">10</label>
      </ul>
    </div>
  );
}

export default FeedbackRating;
