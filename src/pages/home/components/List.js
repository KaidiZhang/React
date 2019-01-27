import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import * as actionCreator from '../store/actionCreator';
import {Link} from  'react-router-dom';

class List extends PureComponent{
    render(){
        const {list, getMoreList} = this.props;
        return(
            <div>
                {

                    list.map((item, index)=>{
                        return (
                            <Link key={index} to={'/detail?id=' + item.get('id')}>
                        <ListItem >
                            <img alt={''} className={'list-pic'} src={item.get('imgURL')}/>
                            <ListInfo>
                                <h3 className={'listTitle'}>{item.get('title')}</h3>
                                <p className={'desc'}>
                                    {item.get('desc')}
                                </p>
                            </ListInfo>
                        </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={getMoreList}>More Content</LoadMore>
            </div>
            )


    }
}

const MapState = (state) => {
    return {
        list: state.getIn(['home', 'articleList'])
    }
};

const MapDispatch = (dispatch) => ({
    getMoreList(){
        const action = actionCreator.getMoreList();
        dispatch(action);
    }
});

export default connect(MapState, MapDispatch)(List);