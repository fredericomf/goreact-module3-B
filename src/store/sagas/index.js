/**
 * NOTA_ESTUDO: O 'takeLatest' serve para que só a última requisição solicitada tenha efeito. Ex: O
 * usuário clica várias vezes no botão de ação, só o último clique será acionado.
 *
 * Um outro método antagônico à supradescrito seria o takeEvery, que deixaria todas as requisições rodando em background
 * independente da quantidade acionada
 */
import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

// NOTA_ESTUDO: Esse * depois do function é um 'generator' que trabalha de forma similar ao async await
export default function* rootSaga() {
  // NOTA_ESTUDO: o all é como se fosse o combine reducers do redux (O yield é similar ao await)
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
