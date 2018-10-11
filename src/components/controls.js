import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_name:"",
            task_level:"low"
        };
 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);


    }

handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;   
        this.setState({
          [name]: value })
    }
handleSubmit(event){
        let new_task={name: this.state.task_name, level: this.state.task_level};
        this.props.onClickSubmit(new_task);       
        event.preventDefault()
    }   
render() {   
        
        return  (
            <div className="col-sm-5">
            <form onSubmit={this.handleSubmit}>
            <div className="input-group-prepend" >
            <input type="text" className="form-control" placeholder="Task name" 
            value={this.state.task_name} name='task_name'  
            onChange={this.handleChange} 
            required />
            </div>
            <div className="input-group-prepend"> 
                <select className="form-control" type='selection' 
                name='task_level' value={this.state.task_level} 
                onChange={this.handleChange} required>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                </select>
                <button type="submit" className="btn btn-primary">Submit <i className="fas fa-arrow-right"></i></button>

            </div>
            

            </form>
            </div>
            
        )

    }

}
export default Controls;

