import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import goodsReducer from "./goods_reducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    goodsPage: goodsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;
