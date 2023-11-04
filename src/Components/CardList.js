import React from 'react';
// import './CardList.css';
import Card from './Card';



    const cards = [
        { name: 'John Doe', title: 'Architect & Engineer' },
        { name: 'Jane Smith', title: 'Designer' },
        { name: 'Bob Johnson', title: 'Developer' },
        { name: 'Alice Brown', title: 'Marketing Specialist' },
        { name: 'Ella Davis', title: 'Graphic Designer' },
        { name: 'David Lee', title: 'Software Engineer' },
        { name: 'Grace Wilson', title: 'Project Manager' },
        { name: 'Oliver Green', title: 'UX Designer' },
      ];
  


  const CardList = () => {
    return (
      <div className="card-list">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} title={card.title} />
        ))}
      </div>
    );
  };
  
  export default CardList;


