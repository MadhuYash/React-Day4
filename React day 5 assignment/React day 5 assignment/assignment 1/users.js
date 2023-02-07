import React,{useState} from 'react';

function Users()  {
     const[users,setUsers] = useState([{name :"Madhu",gender:"female"},
     {name :"Raviteja",gender:"male"}])
  
  return (
    <div>
         <h2>Welcome To Users Component</h2>
         
     <ul>
    {users.map((users,index)=>
    <li>{`${users.name} : ${users.gender}`}</li>
)}
    </ul>
         
    </div>
  )
    

}

export default Users;