import React,{useState} from 'react';

function Animals()  {
     const[animals,setAnimals] = useState([{name :"Lion",Info:"The lion is a large cat of the genus Panthera native to Africa and India."},
     {name :"Tiger",Info:"The tiger is the largest living cat species and a member of the genus Panthera."}])
  
  return (
    <div>
         <h2>Welcome To Animal Component</h2>
         
     <ul>
    {animals.map((animal,index)=>
    <li>{`${animal.name} : ${animal.Info}`}</li>
)}
    </ul>
         
    </div>
  )
    

}

export default Animals;