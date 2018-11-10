import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducer';
import App from './App';
import './index.css';

// redux 注入操作
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];
const store = createStore(reducer,composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
     <Provider store={ store }>
         <App/>
     </Provider>,
     document.getElementById('root')
)
registerServiceWorker();