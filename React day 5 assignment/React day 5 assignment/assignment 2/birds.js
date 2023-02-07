import React from 'react';
class Birds extends React.Component
 {
    constructor(props)
    {
        super(props)
        this.state={
            birds : ["parrot","cuckoo","crow"]
        }
    }
    render() { 
        return (<div><h2>Welcome to Birds class</h2>
        {
        <ul>
        {this.state.birds.map((bird,i)=> (<li key={i}>{bird}</li>


        ))}
        </ul>
        }
        
        </div> )
        
    }
  
}
 
export default Birds;