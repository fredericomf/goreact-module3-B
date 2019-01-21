/** NOTA_ESTUDO: Componente dispara esse método e depois segue o fluxo:
 * REQUEST -> SAGA -> CHAMADA API -> CHAMA A ACTION SUCCESS (addFavoriteSuccess)
 *
 * NOTA_ESTUDO: As actions são escutadas tanto pelo saga como pelos reducers ao mesmo tempo
 */
export const addFavoriteRequest = repository => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: { repository },
});

export const addFavoriteSuccess = data => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: { data },
});
