import { fromJS } from 'immutable';
const  defaultState = fromJS({
    login: false,
});

export default (state=defaultState, action) => {
    if(action.type==='changeType'){
        return state.set('login', true);
    }
    if(action.type==='logout'){
        return state.set('login', false);
    }
    return state
}
