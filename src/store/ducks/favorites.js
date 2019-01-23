// NOTA_ESTUDO: Antes as actions e os reducers ficavam em pastas separadas, agora usamos o padrão DUCK para juntar ambos
/**
 * TYPES
 */

export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

/**
 * REDUCERS
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, error: null, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    // return [
    //   ...state,
    //   action.payload.data,
    //   // NOTA_ESTUDO: A forma abaixo era como estava sendo estaticamente adicionado
    //   // {
    //   //   id: Math.random(),
    //   //   name: 'facebook/react',
    //   //   description: 'A declarative, efficient, and flexible javascript framework.',
    //   //   url: 'http://github.com/facebook/react',
    //   // },
    // ];
    default:
      return state;
  }
}

/**
 * ACTIONS
 */
/** NOTA_ESTUDO: Componente dispara esse método e depois segue o fluxo:
 * REQUEST -> SAGA -> CHAMADA API -> CHAMA A ACTION SUCCESS (addFavoriteSuccess)
 *
 * NOTA_ESTUDO: As actions são escutadas tanto pelo saga como pelos reducers ao mesmo tempo
 */

export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
