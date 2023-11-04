import { updateSelectedCard } from '../firebase';

const CardItem = ({ card }) => {
    const handleSelect = () => {
      updateSelectedCard(card.id);
    };
  
    return (
      <div className="CardItem" onClick={handleSelect}>
        <img src={card.imageURL} alt={card.title} />
        <p>{card.title}</p>
      </div>
    );
  };
  
  export default CardItem;
  