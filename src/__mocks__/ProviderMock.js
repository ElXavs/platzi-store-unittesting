import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

//este es un mock para todos los demas elementos de mi aplicacion
//nuestra aplicacion esta conectada con router y redux, para poder trabajar con redux, necesito un mock del provider
//de toda la estructura a la cual yo tengo que pasarle un estado inicial y todos los elementos de arriba que son
//necesarios para montar cada uno de los elementos que vamos a probar

const store = createStore(reducer, initialState);
const history = createBrowserHistory();
const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
