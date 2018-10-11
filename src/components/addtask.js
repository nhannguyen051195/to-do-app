import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };        
        this.click = this.click.bind(this);

    }  
    
    click(){
        this.props.click();
    }
    render() {
        let elmButton= <button type="button" className="btn btn-secondary btn-block" onClick={this.click}>Close</button>
        if(this.props.isShowForm===false)
        elmButton=<button type="button" className="btn btn-primary btn-block" onClick={this.click}>Add Task</button>

    return (
            <div className='col-sm-4'>
                {elmButton}
            </div>
        )

    }

}
export default AddTask;