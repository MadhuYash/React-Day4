import React,{useState} from 'react';

function Birds()  {
     const[birds,setBirds] = useState([{name :"Parrot",Info:"They are very intelligent and they are imitating several sounds."},
     {name :"Cuckoo",Info:"Cuckoos lay their eggs in other birds nests."}])
  
  return (
    <div>
         <h2>Welcome To Birds Component</h2>
         
     <ul>
    {birds.map((birds,index)=>
    <li>{`${birds.name} : ${birds.Info}`}</li>
)}
    </ul>
         
    </div>
  )
    

}

export default Birds;