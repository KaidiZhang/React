import React, {PureComponent} from 'react';
import {DetailWrapper, Header, Content} from './style';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent{
    render(){
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.location.search.substring(4));
    }
}

export const MapState = (state)=>({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

export const MapDispatch =(dispatch)=>({
    getDetail(id){
        dispatch(actionCreator.getDetail(id));
    }
});

export default connect(MapState,MapDispatch)(withRouter(Detail));