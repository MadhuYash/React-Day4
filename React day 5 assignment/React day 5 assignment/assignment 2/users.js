import React from 'react';
class Users extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            users : ["Madhu","Teja","Rammi"]
        }
    }
    render() { 
        return (<div><h2>Welcome to Users class</h2>
        {
        <ul>
        {this.state.users.map((user,i)=> (<li key={i}>{user}</li>


        ))}
        </ul>
        }
        
        </div> )
        
    }
  
}
 
export default Users;