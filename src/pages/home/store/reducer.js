import { fromJS } from 'immutable';
const  defaultState = fromJS({
    articleList: [],
    showScroll: false
});

export default (state=defaultState, action) => {
    if(action.type==="homepage"){
        return state.set('articleList', fromJS(action.data));
    }
    if(action.type==="homeMore"){
        return state.set('articleList', state.get('articleList').concat(fromJS(action.data)));
    }
    if(action.type==='scrollShow'){
        return state.set('showScroll', action.flag);
    }
    return state
}

