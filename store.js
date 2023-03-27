import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import postsReducer from "./reducer";
import saga from './saga'
import createSagaMiddleware from 'redux-saga'

const rootReducer = combineReducers({
    postsPage: postsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(saga)

export default store