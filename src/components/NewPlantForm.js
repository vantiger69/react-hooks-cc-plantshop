import React,{useState} from "react";

function NewPlantForm({onAddPlant}) {
  
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();


    const newPlant = {
     
      name,
      image,
      price:parseFloat(price),
    };


    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "content-Type":"application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then((response) => response.json())
    .then((data) => {
      onAddPlant(data);
      setName("");
      setImage("");
      setPrice("");
    })
    .catch((error) => console.error("Error adding plant:",error));
  };

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    
  );
}

export default NewPlantForm;
