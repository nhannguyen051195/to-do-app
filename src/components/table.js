import React, { Component } from 'react';
import Item from './item';
//import {connect} from 'react-redux';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }; 
    }
   
    render() 
    {   //console.log(this.props.todos)
        let task =this.props.task;
        let searchName=this.props.searchName;
        
        let elmItem=task.map((item, index)=>{
            return <Item  id={index+1} 
            key={index} level={item.level} name={item.name} />
        })
        let elmItemSearch=task.map((item, index)=>{
            if(item.name===searchName)
            return <Item id={index+1} 
            key={index} level={item.level} name={item.name} />
            return null;
        })
        if(searchName.length>0)
       {
           return (
            <table className="table table-hover">
            <thead className="table-active">
            <tr>
            <th style={{width:'5%'}}>#</th>
            <th>Task Name</th>
            <th style={{width:'5%'}}>Level</th>
            <th style={{width:'30%'}}>Action</th>
            </tr>        
            </thead>
            <tbody>
                {elmItemSearch}
            </tbody>
            </table>
        )
    }
      else if (searchName.length===0) 
     {
         return (
        <table className="table table-hover">
        <thead className="table-active">
        <tr>
        <th style={{width:'5%'}}>#</th>
        <th>Task Name</th>
        <th style={{width:'5%'}}>Level</th>
        <th style={{width:'30%'}}>Action</th>
        </tr>        
        </thead>
        <tbody>
            {elmItem}
        </tbody>
        </table>
        )
    
    }
    

}

}
/* const mapStateToProps=(state)=>{
    return {
        task: state.tasks
    }
} */
//export default connect(mapStateToProps, null) (Table);
export default Table;