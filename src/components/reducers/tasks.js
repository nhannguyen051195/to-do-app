import * as types from './../constants/ActionTypes'

var initialState= [{name:'coding', level:'high'},{name:'Nguyen Nhan', level:'medium'},
{name:'TRong nguyen', level:'low'}];

var myReducer=(state=initialState, action)=>{
    switch(action.type){
        case types.LIST_ALL: 
        return state;       
        default : 
        return state;
    }   
}
export default myReducer;