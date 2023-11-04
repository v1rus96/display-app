// pages/index.js
import { useState, useEffect } from 'react';
import { getCards, selectCard } from '../utils/api';
import { supabase } from '../utils/supabase';
import styles from '../styles/Card.module.css';

export default function Home() {
  const [cards, setCards] = useState([]);

  // Fetch cards on component mount
  useEffect(() => {
    getCards().then(setCards);

    
const cardSubscription = supabase.channel('custom-all-channel')
.on(
  'postgres_changes',
  { event: '*', schema: 'public', table: 'Cards' },
  (payload) => {
    console.log('Change received!', payload)
    getCards().then(setCards);
  }
)
.subscribe()

    // Cleanup subscription on unmount
    // return () => {
    //   supabase.removeAllChannels(cardSubscription);
    // };
  }, []);

  const handleSelectCard = async (cardId) => {
    await selectCard(cardId);
    // The state will be updated by the subscription's re-fetching
  };

  return (
    <div className="container">
      {cards.map((card) => (
        <div key={card.id}
        className={`${styles.card} ${card.selected ? styles.selected : ''}`}
        onClick={() => handleSelectCard(card.id)}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
