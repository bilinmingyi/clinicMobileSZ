/* 路由表 */
/* 工作聊天室模块  */
const homePageIndex =
    () =>
    import ( /* webpackChunkName: "index" */ "@/pages/homePage/index");
const homePage =
    () =>
    import ( /* webpackChunkName: "homePage" */ "@/pages/homePage/homePage");
const patientInfo =
    () =>
    import ( /* webpackChunkName: "homePage" */ "@/pages/homePage/patientInfo");
const clinicChat =
    () =>
    import ( /* webpackChunkName: "homePage" */ "@/pages/homePage/clinicChat");
const docRecommond =
    () =>
    import ( /* webpackChunkName: "homePage" */ "@/pages/homePage/docRecommond");

/* 消息模块 */
const messageIndex = () =>
    import ( /* webpackChunkName: "message" */ "@/pages/messagePage/index");
const messagePage = () =>
    import ( /* webpackChunkName: "message" */ "@/pages/messagePage/message");
const platformNew = () =>
    import ( /* webpackChunkName: "message" */ "@/pages/messagePage/platformNew");
const addComment = () =>
    import ( /* webpackChunkName: "message" */ "@/pages/messagePage/addComment");
const myNew = () =>
    import ( /* webpackChunkName: "message" */ "@/pages/messagePage/myNew");

/* 个人模块 */
const personIndex = () =>
    import ( /* webpackChunkName: "personPage" */ "@/pages/personPage/index");
const personPage = () =>
    import ( /* webpackChunkName: "personPage" */ "@/pages/personPage/personPage");

/* 常用功能模块 */
const routes = [{
        path: '/',
        redirect: '/homePage'
    },
    {
        path: '/homePage',
        component: () => homePageIndex(),
        children: [{
                path: '',
                name: 'homePage',
                component: () => homePage()
            },
            {
                path: 'patientInfo',
                name: 'patientInfoPage',
                component: () => patientInfo()
            },
            {
                path: 'clinicChat/:patientName',
                name: 'clinicChatPage',
                component: () => clinicChat(),
                props: true
            },
            {
                path: 'docRecommond',
                name: 'docRecommondPage',
                component: () => docRecommond(),
            },
        ]
    },
    {
        path: '/messagePage',
        component: () => messageIndex(),
        children: [{
                path: '',
                name: 'messagePage',
                component: () => messagePage()
            }, {
                path: 'platformNew/:platformTitle',
                name: 'platformNewPage',
                component: () => platformNew(),
                props: true
            }, {
                path: 'addComment/:platformTitle',
                name: 'addCommentPage',
                component: () => addComment(),
                props: true
            },
            {
                path: 'myNew',
                name: 'myNewPage',
                component: () => myNew(),
            }
        ]
    },
    {
        path: '/personPage',
        component: () => personIndex(),
        children: [{
            path: '',
            name: 'personPage',
            component: () => personPage()
        }]
    }
]

export default routes;