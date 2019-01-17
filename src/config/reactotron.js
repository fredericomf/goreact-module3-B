import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

// NOTA_ESTUDO: Essa variável de ambiente é disponibilizada pelo react automaticamente. Assim sabemos em que ambiente estamos.
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
