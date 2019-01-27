import {headerReducer} from '../common/header/store';
import { combineReducers } from 'redux-immutable';
import  {homeReducer} from '../pages/home/store';
import {detailReducer} from '../pages/detail/store/index';
import {LoginReducer} from '../pages/login/store/index';

const Reducer =  combineReducers({
    header : headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login:LoginReducer
});

export default Reducer;

