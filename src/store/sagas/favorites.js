import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess } from '../actions/favorites';

export function* addFavorite(action) {
  // NOTA_ESTUDO: O call é específico para ser utilizado quando a função chamada (api.get) retorna uma promisse
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  const repositoryData = {
    id: data.id,
    name: data.full_name,
    description: data.description,
    url: data.html_url,
  };

  // NOTA_ESTUDO: O put vai enviar a action para os reducers da nossa aplicação
  yield put(addFavoriteSuccess(repositoryData));
}
