import { useState } from "react";

function PlantCard({plant}) {
  
  const [inStock,setInstock] = useState([plant.inStock])

  const handleStockClick = () => {
    setInstock((prevInstock) => !prevInstock);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>price: {plant.price}</p>
      <button className="primary" onClick={handleStockClick}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
