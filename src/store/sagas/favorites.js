import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

// NOTA_ESTUDO: Como era importado antes de aplicar o DUCK PATTERN
// import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

import { Creators as FavoriteActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    // NOTA_ESTUDO: O call é específico para ser utilizado quando a função chamada (api.get) retorna uma promisse
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    // NOTA_ESTUDO: O select serve para que eu tenha acesso ao state do redux e possa fazer seleção de dados
    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
    } else {
      const repositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      // NOTA_ESTUDO: O put vai enviar a action para os reducers da nossa aplicação
      yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailure('Erro ao adicionar repositório'));
  }
}
