import React, {PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from "./style";
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import {connect} from 'react-redux';
import actionCreator from './store/index';
import {BackTop} from './style';

class Home extends PureComponent{



    handleBackTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'} src={"//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"}/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                this.props.showScroll?<BackTop onClick={this.handleBackTop}>Back Top</BackTop>:<div></div>
                    }

            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.BindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
    BindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const MapState= (state) =>({
    showScroll : state.getIn(['home', 'showScroll'])
});

const mapDispathch = (dispatch) => ({
    changeHomeData(){

       const action = actionCreator.getHomeInfo();
       dispatch(action)

    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreator.toggleTopShow(true))
        }else{
            dispatch(actionCreator.toggleTopShow(false))
        }
}
});

export default connect(MapState, mapDispathch)(Home);
