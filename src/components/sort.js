import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'abc'
        };
    this.handleSort=this.handleSort.bind(this);
    this.handleSortChange=this.handleSortChange.bind(this);

    }
    handleSortChange(event) {
        this.setState({value: event.target.value});
      }

    handleSort(event){
        let value=this.state.value;

       this.props.onChangeSort(value) 
       event.preventDefault()
    
    }
    render() {
        return (
            <div className="col-sm-3">            

              
              <form onSubmit={this.handleSort}>
              <div className="input-group-prepend">

                <select className="form-control" value={this.state.value} 
                onChange={this.handleSortChange} >
                    <option value='abc'>Ascending</option>
                    <option value='cba'>Descending</option>

                </select>
                <button type="submit" className="btn btn-primary">Sort</button>
                </div>

                </form>
            </div>
        )

    }

}
export default Sort;