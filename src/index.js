import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { HashRouter as Router,Route,Switch} from "react-router-dom";
//import {createBrowserHistory} from 'history'
import './index.less';
import AppManage from './App';
import Login from './views/login';
import Register from './views/register';
import Blog from './views/blog';
import {message} from 'antd'
import registerServiceWorker from './registerServiceWorker';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/*NProgress.start();
setTimeout(()=>{NProgress.done();},2000);*/

//todo 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if(response.data.code === -1){
        //登陆态失效
        message.error('请重新登陆');
        window.location.hash=('#/login');
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route path='/app' component={Blog}/>
            <Route path='/manage' component={AppManage}/> {/*后台管理系统*/}
        </Switch>
    </Router>
    ,document.getElementById('root')
);
registerServiceWorker();
