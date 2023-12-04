import { combineReducers } from 'redux';

const getDbProduct = () =>{
    let dbData = localStorage.getItem('products');
    return dbData ? JSON.parse(dbData):[];
}
const saveDbProduct = (products) =>{
    localStorage.setItem('products',JSON.stringify(products));
}
const productReducer = (state = getDbProduct(),{type,payload}) =>{
    switch(type){
        case "add":
            saveDbProduct(payload);
            state = getDbProduct();
            return state;
        case "remove":
            state = getDbProduct();
            let pds = state.filter(item => item.id != payload);
            saveDbProduct(pds);
            state =  getDbProduct()
            return state;
        default:
            state = getDbProduct();
            return state;
    }
}
const reducers = combineReducers({
    products:productReducer,
})
export default reducers;