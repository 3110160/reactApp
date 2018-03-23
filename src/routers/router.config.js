import Home from '../views/home'
import Detail from '../views/detail'

const routerList = [
    {
        path:'/home',
        exact:true,
        component:Home
    },{
        path:'/details/:id',
        exact:true,
        component:Detail
    }
];

export default routerList;