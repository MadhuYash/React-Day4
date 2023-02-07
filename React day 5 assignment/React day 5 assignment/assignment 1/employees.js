import React,{useState} from 'react';

function Employees()  {
     const[employees,setEmployees] = useState([{name :"Madhavi",Info:"I'm working at Yash Technologies."},
     {name :"Ramesh",Info:"My bro is working at EPFO ."}])
  
  return (
    <div>
         <h2>Welcome To Employees Component</h2>
         
     <ul>
    {employees.map((employees,index)=>
    <li>{`${employees.name} : ${employees.Info}`}</li>
)}
    </ul>
         
    </div>
  )
    

}

export default Employees;