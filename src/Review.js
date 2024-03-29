import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevBtn = () => {
    setIndex((index) => {
      const newCount = index - 1;

      return checkNumber(newCount);
    });
  };
  const nextBtn = () => {
    setIndex((index) => {
      const newCount = index + 1;
      return checkNumber(newCount);
    });
  };
  const randomPerson = () => {
    let randomValue = Math.floor(Math.random() * people.length);
    if (randomValue === index) {
      randomValue = index + 1;
    }
    setIndex(checkNumber(randomValue));
  };

  const { id, name, job, image, text } = people[index];
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img ' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevBtn}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextBtn}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
