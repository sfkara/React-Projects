import React, { useState } from "react";
import review from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = review[index];
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * review.length);
    setIndex(randomNumber);
  };
  console.log(review);

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => (index <= 0 ? setIndex(3) : setIndex(index - 1))}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => (index >= 3 ? setIndex(0) : setIndex(index + 1))}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
