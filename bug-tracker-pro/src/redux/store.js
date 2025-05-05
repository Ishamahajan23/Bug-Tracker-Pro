import {createStore} from 'redux';
import { logreducer } from './reducer';

const store=createStore(logreducer);

export default store;