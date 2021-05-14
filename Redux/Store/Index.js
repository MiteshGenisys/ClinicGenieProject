import {createStore} from 'redux';
import rootReducer from '../Reducer/Reducer';

const configureStore = createStore(rootReducer);

export default configureStore;
