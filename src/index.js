import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

// Custom components 
import App from './App';
import Game from './components/game/game';
import Result from './components/result/game-result';

// import css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunk));

function AppContainer() {
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="home-page">
        <header className="app-text">
          <div>T I C </div>
          <div>T A C</div>
          <div>T O E </div>
        </header>
        <Route exact path="/" component={App} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/result" component={Result} />
      </div>
    </Router >
  )
}

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
