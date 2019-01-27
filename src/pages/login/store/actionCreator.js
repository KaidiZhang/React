import axios from 'axios';

const changeLogin = () => ({
    type:"changeType"
});

export const login = (account, password) => {
    return (dispatch) =>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLogin())
            }else {
                alert("登陆失败")
            }
        });
    }
};