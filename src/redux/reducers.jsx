import { combineReducers } from 'redux';

const productReducer = (state = [],{type,payload}) =>{
    switch(type){
        case "add":
            state = payload;
            return state;
        case "remove":
            return state.filter(item => item.id != payload);
        default:
            return state;
    }
}
const reducers = combineReducers({
    products:productReducer,
})
export default reducers;