import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import routers from "./routers";

NProgress.start();
setTimeout(()=>{NProgress.done();},2000);

ReactDOM.render(
    <Router>
        <App>
            {routers}
        </App>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
