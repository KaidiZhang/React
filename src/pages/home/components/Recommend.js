import React, {PureComponent} from 'react';
import {RecommendWrapper, RecommendItem} from '../style';

class Recommend extends PureComponent{
    render(){
        return(
            <RecommendWrapper>
                <RecommendItem className={'banner1'}></RecommendItem>
                <RecommendItem className={'banner2'}></RecommendItem>
                <RecommendItem className={'banner3'}></RecommendItem>
                <RecommendItem className={'banner4'}></RecommendItem>
                <RecommendItem className={'banner5'}></RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommend;