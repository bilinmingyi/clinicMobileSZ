/* 路由表 */
/*工作模块下的路由 */
const homePageIndex =
    import ( /* webpackChunkName: "index" */ "@/pages/homePage/index");
const homePage =
    import ( /* webpackChunkName: "homePage" */ "@/pages/homePage/homePage");
const patientInfo =
    import ( /* webpackChunkName: "patientInfo" */ "@/pages/homePage/patientInfo");
const clinicChat =
    import ( /* webpackChunkName: "patientInfo" */ "@/pages/homePage/clinicChat");
const routes = [{
        path: '/',
        redirect: '/homePage'
    },
    {
        path: '/homePage',
        component: () => homePageIndex,
        children: [{
                path: '',
                name: 'homePage',
                component: () => homePage,
            },
            {
                path: 'patientInfo',
                name: 'patientInfoPage',
                component: () => patientInfo,
            },
            {
                path: 'clinicChat/:patientName',
                name: 'clinicChatPage',
                component: () => clinicChat,
                props: true
            }
        ]
    }
]

export default routes;