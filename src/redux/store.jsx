import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';

const data = {
    products:[
        {
            'id' : 'mgmg',
            'title':'Mg Mg',
            'price':'111',
            'image':"https://th.bing.com/th/id/OIP.mlYbdF2yJKHWy3qm3wXqPQHaE8?rs=1&pid=ImgDetMain"
        },
        {
            'id' : 'aungaung',
            'title':'Aung Aung',
            'price':'111',
            'image':"https://th.bing.com/th/id/OIP.mlYbdF2yJKHWy3qm3wXqPQHaE8?rs=1&pid=ImgDetMain"
        }
    ]
};

export const store = createStore(reducers,data,applyMiddleware(thunk))