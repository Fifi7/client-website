import React, { useState } from 'react';
import Card from './Card';
import './CardSlider.css'


const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const nextPage = () => {
    const nextIndex = currentIndex + cardsPerPage;
    if (nextIndex < cards.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const prevPage = () => {
    const prevIndex = currentIndex - cardsPerPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const visibleCards = cards.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="card-slider">
      <div className="card-list">
        {visibleCards.map((card, index) => (
          <Card key={index} name={card.name} title={card.title} />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevPage} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentIndex + cardsPerPage >= cards.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
