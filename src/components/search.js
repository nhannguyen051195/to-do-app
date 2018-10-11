import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
                strSearch:'',
        };
       this.handleChangeInput=this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeInput(event){
            this.setState({
                strSearch: event.target.value
            })
    }
    handleSubmit(event) {
        let searchValue=this.state.strSearch;  
        this.props.onClickSearch(searchValue); 
        event.preventDefault();
      }
    
    

    render() {
        return (
            <div className="col-sm-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.state.strSearch} placeholder="Search" onChange={this.handleChangeInput}/>
                    <div className="input-group-append">
                    <button className="btn btn-info" type="submit" onClick={this.props.handleClear}>Return <i className="fas fa-undo"></i></button>
                    <button className="btn btn-success" type="submit" onClick={this.handleSubmit}>Search <i className="fas fa-search"></i></button>

                    </div>
                    
                </div>
            </div>
        )

    }

}
export default Search;
