import { createStore, compose, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

/**
 * NOTA_ESTUDO: Não funcionou a configuração para o sagaMonitor.
 * Fiz buscas no google pela resolução mas não encontrei. Pelas leituras da documentação que fiz
 * esse recurso é mais utilizado em REACT-NATIVE.
 * Por não ter acesso ao grupo de estudos no DISCORD fiquei sem saber como resolver.
 * Fica como débito técnico para quando eu realmente precisar inspecionar as requisições SAGA.
 */
// const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
// const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));

// NOTA_ESTUDO: É necessário rodar esse comando para o SAGA entender que ele está integrado como middleware (note que é necessário passar os sagas importados)
sagaMiddleware.run(sagas);

export default store;
