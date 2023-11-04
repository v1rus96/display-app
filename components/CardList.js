import { useEffect, useState } from 'react';
import { fetchCards } from '../firebase';
import CardItem from './CardItem';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      const fetchedCards = await fetchCards();
      setCards(fetchedCards);
    };
    loadCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;