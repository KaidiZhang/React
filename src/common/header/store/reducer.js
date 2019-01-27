import {FOCUSCHANGE, CHANGELIST, MOUSEENTER, MOUSELEAVE, CHANGEPAGE} from './actionType'
import { fromJS } from 'immutable';
const  defaultState = fromJS({
    focused:false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

//reducer可以接受state，但是不能修改state
export default (state = defaultState, action) => {
    if(action.type===FOCUSCHANGE){
        return state.set('focused',!state.get('focused'));
    }
    if(action.type===CHANGELIST){
        return state.set('list', action.data).set('totalPage', action.totalPage);
    }
    if(action.type===MOUSEENTER){
        return state.set('mouseIn', true);
    }
    if(action.type===MOUSELEAVE){
        return state.set('mouseIn', false);
    }
    if(action.type===CHANGEPAGE){
        return state.set('page', action.num);
    }
    return state;
}
