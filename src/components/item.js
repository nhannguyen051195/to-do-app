import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        delete:false,
        
        
    };
    this.delete=this.delete.bind(this);

    }
    
    delete(){
        this.setState({delete:true})
    }
    render() {
        let id=this.props.id;
        let name=this.props.name;
        let level= this.props.level;

        
        let levelInsert=null;
        if(level==='low')
        {levelInsert= <p className="bg-success text-white text-center">Low</p>;}
        else if(level==='high')
        {levelInsert= <p className="bg-danger text-white text-center">High</p>;}
        else 
        levelInsert= <p className="bg-warning text-white text-center">Medium</p>;
        
        if(this.state.delete===false)
        {return (
            
            <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th>{levelInsert}</th>
            <th>
            <button type="button" className="btn btn-success" onClick={this.delete}>Done!</button>
            </th>
            </tr>       
        )}
        return null

    }

}
export default Item;
