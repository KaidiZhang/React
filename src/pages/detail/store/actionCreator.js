import axios from 'axios';

const changeDetailinCreator = (title, content)=>({
        type: 'changeDetail',
        title,
        content
});

export const getDetail = (id) =>{
    return (dispatch)=>{
        axios.get('api/detail.json?id='+id).then((res)=>{
            const result = res.data.data.list[id-1];
            const action = changeDetailinCreator(result.title, result.content);
            dispatch(action);
        }).catch(()=>{

        })
    }
};