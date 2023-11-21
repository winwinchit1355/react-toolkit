import { combineReducers } from 'redux';

const initialData = [
    {name:'mgmg'},
    {name:'ayeaye'}
]
const productReducer = (state=initialData,{type,payload}) =>{
    switch(type){
        case "add":
            return [state,...payload];
        case "remove":
            return state.filter((item=>item.id != payload));
        default:
            return state;
    }
}
const reducers = combineReducers({
    products:productReducer,
})
export default reducers;