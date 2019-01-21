import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

// NOTA_ESTUDO: É necessário rodar esse comando para o SAGA entender que ele está integrado como middleware (note que é necessário passar os sagas importados)
sagaMiddleware.run(sagas);

export default store;
