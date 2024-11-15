import React,{useState,useEffect} from "react";
import PlantCard from "./PlantCard";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";

function PlantList() {
  const [plantsCard,setPlantsCard] = useState([]);
  const [searchTerm,setSearchTerm] = useState("")

  const addNewPlant = (newPlant) => {
    setPlantsCard((prevPlants) => [...prevPlants,newPlant]);
  };

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => setPlantsCard(data))
    .catch((error) => console.error("Error fetching data!",error))
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    //console.log("current search term:",term);
  };
  const filteredPlants = plantsCard.filter((plants) =>
    plants.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
       <NewPlantForm onAddPlant={addNewPlant} />
     <Search onSearchChange={handleSearchChange}/>
    <ul className="cards">{/* render PlantCards components in here */}
       {filteredPlants.map((plant) =>(
        <PlantCard key={plant.id} plant={plant}/>
      
       ))}
    </ul>
    </div>
  );
}

export default PlantList;
