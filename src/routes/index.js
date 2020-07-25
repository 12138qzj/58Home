import React from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';

import Tabbuttom from '../components/tabbuttom/Tabbuttom';

import Mian from '../pages/Main/Main';
import Server from '../pages/server/Server';
import Info from '../pages/Info/Info';
import My from '../pages/my/my';
import Detail from '../pages/details/Detail';
import Order from '../pages/order/Order'
// import Tabbuttom from '../components/tabbuttom/Tabbuttom';



export default [{
    component: BlankLayout,
    routes: [{
            path: '/home',
            // exact: true,
            component: Tabbuttom,
            routes: [{
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main/',
                    component: Mian,
                },

                {
                    path: '/home/server',
                    component: Server,
                },
                {
                    path: '/home/info',
                    component: Info,
                },
                {
                    path: '/home/my',
                    component: My,
                    routes: [ 
                        {
                            path: '/home/my/order',
                            render:()=><Redirect to="/order"/>

                        }
                    ]
                },
            ],

        },
        {
            path: '/detail',
            exact: true,
            component: Detail,
        }
        ,
        {
            path: '/order',
            exact: true,
            component: Order
        }

    ]
}]


// export default [{
//     component: BlankLayout,
//     routes: [
//         {
//             path: '/',
//             exact: true,
//             render: () => < Redirect to = { "/main" }
//             />
//         },
//         {
//             path: '/main',
//             component: Mian,
//         },
//         {
//             path: '/server',
//             component: Server,
//         },
//         {
//             path: '/info',
//             component: Info,
//         },
//         {
//             path: '/my',
//             component: My,
//         },
//     ]
// }]