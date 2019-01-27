import axios from "axios";
import actionCreator from "./index";

export const getHomeInfo = () => {
  return (dispatch) => {
      axios.get('/api/home.json').then((res)=>{
          const result = res.data.data.articleList;
          const action = {
              type: "homepage",
              data: result
          };
          dispatch(action);
      })
    }
};

export const getMoreList = () =>{
    return (dispatch) =>{
        axios.get('/api/homeMore.json').then((res)=>{
            const result = res.data.data.articleList;
            const action = {
                type: "homeMore",
                data: result
            };
            dispatch(action);
        })
    }
};

export const toggleTopShow = (flag) =>{
  return {
      type:'scrollShow',
      flag
  }
};