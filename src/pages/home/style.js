import styled from 'styled-components';
import logoPic1 from '../../statics/Recommend/banner1.png'
import logoPic2 from '../../statics/Recommend/banner2.png'
import logoPic3 from '../../statics/Recommend/banner3.png'
import logoPic4 from '../../statics/Recommend/banner4.png'
import logoPic5 from '../../statics/Recommend/banner5.png'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float:left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float:right;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 490px;
    float: left;
    padding-right:10px;
    color: #333;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color:#333;
    }
     .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999,
     }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;   
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    &.banner1 {
        background:url(${logoPic1});
        background-size: contain;
    };
    &.banner2 {
        background:url(${logoPic2});
        background-size: contain;
    };
    &.banner3 {
        background:url(${logoPic3});
        background-size: contain;
    };
    &.banner4 {
        background:url(${logoPic4});
        background-size: contain;
    };
    &.banner5 {
        background:url(${logoPic5});
        background-size: contain;
    };
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;   
    text-align: center;
`;

export const LoadMore = styled.div`
       width: 100%;
       height: 40px;
       line-height: 40px;
       background: #a5a5a5;
       text-align: center;
       border-radius: 20px;
       color:#fff;
       margin: 30px 0;
       cursor: pointer;
`;

export const BackTop = styled.div`
      position: fixed;
      width: 60px;
      height:60px;
      line-height: 60px;
      text-align:center;
      border: 1px solid #ccc;
      right: 100px;
      bottom:100px;
      font-size:8px;
      cursor: pointer;
`;