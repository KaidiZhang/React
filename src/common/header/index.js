import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {SearchInfoList, SearchInfoItem, SearchInfoSwitch, SearchInfoTitle, SearchInfo, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from "./style";
import '../../statics/iconfont/iconfont.css';
import {connect} from 'react-redux';
import {actionCreator} from './store'
import {Link} from 'react-router-dom';


class Header extends Component{
    getSearchArea(){
        const {list, focused, page, mouseEnter, mouseLeave, mouseIn, handleChangePage, totalPage} = this.props;
        const pageList = [];
        const jsList = list.toJS();

        for(let i=((page-1)*10); i<page*10; i++){
            pageList.push(
                <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
            )
        }

        if(focused||mouseIn){
            return (
                <SearchInfo onMouseEnter = {mouseEnter} onMouseLeave = {mouseLeave}>
                    <SearchInfoTitle>Hot
                        <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
                            change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }



                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else{

        }
    }


    render() {
        const {focused, handleInputFocus, list, login, logOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to={'/'}>
                </Link>
                <Nav>
                    <Link to={'/'}>
                    <NavItem className={'left active'}>首页</NavItem>
                    </Link>
                    <NavItem className={'left'}></NavItem>
                    {
                        login?<NavItem className={'right'} onClick={logOut}>退出</NavItem>:<Link to={'/login'}><NavItem className={'right'}>登陆</NavItem></Link>
                    }

                    <NavItem className={'right'}><span className="iconfont">&#xe636;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''} onFocus={()=>handleInputFocus(list)}
                                       onBlur={()=>handleInputFocus(list)}></NavSearch>
                        </CSSTransition><span
                        className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
                        {this.getSearchArea()}
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Link to={'/write'}><Button className={'writing'}><span className="iconfont">&#xe602;</span>写文章</Button></Link>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }


};

const MapStateToProps = (state) => {
    return{
        list:state.getIn(['header', 'list']),
        focused:state.getIn(['header', 'focused']),
            //state.get('header').get('focused')
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', "login"])
    }
};

const MapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size===0) {
                dispatch(actionCreator.getList());
            }
            dispatch(actionCreator.focusedAction());
        },
        mouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreator.changePage(page+1));
            }
            else{dispatch(actionCreator.changePage(1));}
        },
        logOut(){
            const action = {
                type: 'logout'
            };
            dispatch(action);
        }
    }
};



export default connect(MapStateToProps, MapDispathToProps)(Header)