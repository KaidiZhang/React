import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Button, LoginWrapper, LoginBox, Input} from './style';
import {actionCreator} from './store/index';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent{
    render(){
        const {login} = this.props;
        if(!login) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {
                            this.account = input
                        }}></Input>
                        <Input placeholder='密码' type={'password'} ref={(input) => this.password = input}></Input>
                        <Button onClick={() => this.props.loginClick(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to={'/'}></Redirect>
        }
    }
    componentDidMount(){
    }
}

export const MapState = (state)=>({
    login: state.getIn(['login','login'])
});

export const MapDispatch =(dispatch)=>({
    loginClick(accountEle, passwordEle){
        dispatch(actionCreator.login(accountEle.value,passwordEle.value))
    }
});

export default connect(MapState,MapDispatch)(Login);