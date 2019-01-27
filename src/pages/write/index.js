import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent{
    render(){
        const {login} = this.props;
        if(login) {
            return (
                <div>write</div>
            )
        }else{
            return <Redirect to={'/login'}></Redirect>
        }
    }

}

export const MapState = (state)=>({
    login: state.getIn(['login', 'login'])
});

export const MapDispatch =(dispatch)=>({

});

export default connect(MapState,MapDispatch)(Write);