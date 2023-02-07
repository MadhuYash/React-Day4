import React from 'react';
class Animals extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            animals : ["Lion","Dog","Tiger"]
        }
    }
    render() { 
        return (<div><h2>Welcome to animals class</h2>
        {
        <ul>
        {this.state.animals.map((animal,i)=> (<li key={i}>{animal}</li>


        ))}
        </ul>
        }
        
        </div> )
        
    }
  
}
 
export default Animals;

