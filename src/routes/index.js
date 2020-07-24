import React from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import Mian from '../pages/Main/Main';
import Server from '../pages/server/Server';
import Info from '../pages/Info/Info';
import My from '../pages/my/my';
import Order from '../pages/order/Order'
// import Tabbuttom from '../components/tabbuttom/Tabbuttom';



export default [{
    component: BlankLayout,
    routes: [{
        path: '/',
        exact: true,
        render: () => < Redirect to={"/main"}
        />
    },
    {
        path: '/main',
        component: Mian,
    },
    {
        path: '/server',
        component: Server,
    },
    {
        path: '/info',
        component: Info,
    },
    {
        path: '/my',
        component: My,
        routes: [ // 嵌套路由
            {
                path: '/order',
                component: Order,
            }
        ]
    },
    ]
}]






// [{
//     component: BlankLayout,
//     routes: [{
//             path: '/',
//             exact: true,
//             render: () => < Redirect to = { "/recommend" }
//             />
//         },
//         {
//             path: '/recommend',
//             component: Recommend,
//             // routes:[
//             //         {
//             //             path:'/recommend/:id',
//             //             component:AlbumComponent
//             //         }
//             //     ]
//         },
//         {
//             path: '/sign',
//             component: Sign,
//             // routes:[
//             //         {
//             //             path:'/recommend/:id',
//             //             component:AlbumComponent
//             //         }
//             //     ]
//         }
//     ]
// }]