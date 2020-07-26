import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';

import Tabbuttom from '../components/tabbuttom/Tabbuttom';

// import Main from '../pages/Main/Main';
// import Server from '../pages/server/Server';
// import Info from '../pages/Info/Info';
// import My from '../pages/my/my';
// import Detail from '../pages/details/Detail';
// import Order from '../pages/order/Order';
// import OrderItem from '../pages/order/OrderItem';
import Payment from '../pages/payment/Payment'

const Main = lazy(()=> import('../pages/Main/Main'));
const Server = lazy(()=> import('../pages/server/Server'));
const Info = lazy(()=> import('../pages/Info/Info'));
const My = lazy(()=> import('../pages/my/my'));
const Detail = lazy(()=> import('../pages/details/Detail'));
const Order = lazy(()=> import('../pages/order/Order'));
const OrderItem = lazy(()=> import('../pages/order/OrderItem'));
// const Payment = lazy(()=> import('../pages/payment/Payment'));

const SuspenseComponent = Component => props => {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    )
  }

export default [{
    component: BlankLayout,
    routes: [
        {
            path:'/home',
            component: Tabbuttom,
            routes: [{
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                },

                {
                    path: '/home/server',
                    component: SuspenseComponent(Server),
                },
                {
                    path: '/home/info',
                    component: SuspenseComponent(Info),
                },
                {
                    path: '/home/my',
                    component: SuspenseComponent(My),
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
            component: SuspenseComponent(Detail),
            // routes: [
            //     {
            //         path: '/detail/payment',
            //         render: ()=> <Redirect to='/payment'/>
            //     }
            // ]
        },
        {
            path: '/order',
            component: SuspenseComponent(Order),
            routes: [
                {
                    path: '/order',
                    exact: true,
                    render: () => <Redirect to={"/order/comfirm"} />
                },
                {
                path: '/order/comfirm',
                exact: true,
                component: SuspenseComponent(OrderItem)
                },
                {
                path: '/order/service',
                component: SuspenseComponent(OrderItem)
                },
                {
                path: '/order/paid',
                component: SuspenseComponent(OrderItem)
                },
                {
                path: '/order/evaluated',
                component: SuspenseComponent(OrderItem)
                },
                {
                path: '/order/all',
                component: SuspenseComponent(OrderItem)
                }

            ]
        },
        {
            path: '/payment',
            exact: true,
            component: Payment,
            // routes: [
            //     {
            //         path: '/payment',
            //         render: () => <Redirect to={"/payment"} />
            //     },
            //     {
            //     path: '/payment',
            //     component: SuspenseComponent(Payment)
            //     },
            // ]
        }
    ]
}];
