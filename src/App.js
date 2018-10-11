import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Search from './components/search';
import Sort from './components/sort';
import Table from './components/table';
import Controls from './components/controls';
import AddTask from './components/addtask';
import tasks from './components/task';
//import demo from './training/demo';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showControls: false,
      task: tasks,
      searchName:'',

      
    }
    this.addTaskHandler = this.addTaskHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeSortHandler = this.onChangeSortHandler.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.onClickShow = this.onClickShow.bind(this);
  }
  addTaskHandler() {
    this.setState({
      showControls: !this.state.showControls

    });
  } 
  handleSubmit(new_task){
    let newTask1=[...this.state.task];
    
    newTask1.push({
    name: new_task.name,
    level: new_task.level,
   
  }) 
  

  this.setState({
    task: newTask1,
    showControls: true });
  }
  onChangeSortHandler(value){
    var sorted_task=this.state.task;    
    if(value==='abc'){
      function compare(a, b) {
 
        const genreA = a.name.toUpperCase();
        const genreB = b.name.toUpperCase();
      
        let comparison = 0;
        if (genreA > genreB) {
          comparison = 1;
        } else if (genreA < genreB) {
          comparison = -1;
        }
        return comparison;
      }
      sorted_task.sort(compare);

      
    } else if(value==='cba'){
      function compare(a, b) {
 
        const genreA = a.name.toUpperCase();
        const genreB = b.name.toUpperCase();
      
        let comparison = 0;
        if (genreA > genreB) {
          comparison = -1;
        } else if (genreA < genreB) {
          comparison = 1;
        }
        return comparison;
      }
      sorted_task.sort(compare);      
    }
    this.setState({
      task: sorted_task
    })
  
  }

  onClickSearch(searchValue){
  this.setState({
  searchName:searchValue
  });

  }
  onClickShow(){
    this.setState({
      //showTable: true,
      searchName:''
    })
  }
 

    
  
  render() {
    let showAddTaskControl = null;
    let tasks  =this.state.task;
    let isShowForm = this.state.showControls;
    
    if (isShowForm === true) {
      showAddTaskControl = <Controls 
      
      onClickSubmit={this.handleSubmit} />
    
    }
    return (
      <div className="container">
        <Title />
        <br></br>
        <div className='row'>
          <Search onClickSearch={this.onClickSearch} handleClear={this.onClickShow}/>
          <Sort onChangeSort={this.onChangeSortHandler} />
          <AddTask click={this.addTaskHandler} isShowForm={isShowForm} />
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
          </div>
          {showAddTaskControl}
        </div>
        <br></br>
        <Table 
        task={tasks}
        searchName={this.state.searchName} 
        />
      </div>

    );
  }
}

export default App;


