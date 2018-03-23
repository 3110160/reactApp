import React from 'react';
import {Route} from "react-router-dom";
import routerList from './router.config'
const routers =(
    <div>
        {routerList.map((item,index)=><Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component} />)}
    </div>
);

export default routers;