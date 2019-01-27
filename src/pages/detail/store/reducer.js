import { fromJS } from 'immutable';
const  defaultState = fromJS({
    title : '',
    content: ''
});

export default (state=defaultState, action) => {
    if(action.type==='changeDetail'){
        return state.set('title', action.title).set('content', action.content);
    }
    return state
}

