import React from 'react';
class Employees extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            employees : ["Madhavi","Supritha","Sruthi"]
        }
    }
    render() { 
        return (<div><h2>Welcome to Employees class</h2>
        {
        <ul>
        {this.state.employees.map((employee,i)=> (<li key={i}>{employee}</li>


        ))}
        </ul>
        }
        
        </div> )
        
    }
  
}
 
export default Employees;