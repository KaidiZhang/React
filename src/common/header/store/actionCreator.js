import {FOCUSCHANGE, CHANGELIST, MOUSEENTER, MOUSELEAVE, CHANGEPAGE} from './actionType';
import {fromJS} from 'immutable';
import axios from 'axios';


const changeList = (data) => ({
    type: CHANGELIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const focusedAction = ()=>({
        type:FOCUSCHANGE
    });



export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('err')
        })
    }
};

export const mouseEnter = ()=>({
    type: MOUSEENTER
});

export const mouseLeave = ()=>({
    type: MOUSELEAVE
});

export const changePage = (num)=>({
    type: CHANGEPAGE,
    num
});