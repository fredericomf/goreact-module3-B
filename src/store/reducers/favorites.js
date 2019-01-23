const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, error: null, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case 'ADD_FAVORITE_FAILURE':
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
 * NOTA_ESTUDO:
 *
 * ESSE ARQUIVO FOI DEPRECIADO PELA AULA DO 'DUCK PATTERN'
 *
 */
