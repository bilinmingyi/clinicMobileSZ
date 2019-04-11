/* 路由表 */

/* 工作聊天室模块  */

const homePageIndex = () =>
  import( /* webpackChunkName: "index" */ "@/pages/homePage/index");
const homePage = () =>
  import( /* webpackChunkName: "homePage" */ "@/pages/homePage/homePage");
const patientInfo = () =>
  import( /* webpackChunkName: "homePage" */ "@/pages/homePage/patientInfo");
const clinicChat = () =>
  import( /* webpackChunkName: "homePage" */ "@/pages/homePage/clinicChat");
const docRecommond = () =>
  import( /* webpackChunkName: "homePage" */ "@/pages/homePage/docRecommond");
const replaySettle = () =>
  import( /* webpackChunkName: "homePage" */ "@/pages/homePage/replaySettle");

/* 消息模块 */

const messageIndex = () =>
  import( /* webpackChunkName: "message" */ "@/pages/messagePage/index");
const messagePage = () =>
  import( /* webpackChunkName: "message" */ "@/pages/messagePage/message");
const platformNew = () =>
  import( /* webpackChunkName: "message" */ "@/pages/messagePage/platformNew");
const addComment = () =>
  import( /* webpackChunkName: "message" */ "@/pages/messagePage/addComment");
const myNew = () =>
  import( /* webpackChunkName: "message" */ "@/pages/messagePage/myNew");

/* 个人模块 */
const personIndex = () =>
  import( /* webpackChunkName: "personPage" */ "@/pages/personPage/index");
const personPage = () =>
  import( /* webpackChunkName: "personPage" */ "@/pages/personPage/personPage");
const personInfo = () =>
  import( /* webpackChunkName: "personPage" */ "@/pages/personPage/personInfo");
const bindPhone = () =>
  import( /* webpackChunkName: "personPage" */ "@/pages/personPage/bindPhone");

/* 常用功能模块 深圳前6个功能为一个模块*/

const functionIndex = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/index");
const registerStatistic = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/registerStatistic");
const medicalStatistic = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/medicalStatistic");
const chargeStatistic = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/chargeStatistic");
const enterBound = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/enterBound");
const outerBound = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/outerBound");
const stockStatistic = () =>
  import( /* webpackChunkName: "commonFunction" */ "@/pages/functionPage/stockStatistic");



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
        path: 'clinicChat',
        name: 'clinicChatPage',
        component: () => clinicChat(),
        props: true
      },
      {
        path: 'docRecommond',
        name: 'docRecommondPage',
        component: () => docRecommond(),
      },
      {
        path: 'replaySettle',
        name: 'replaySettlePage',
        component: () => replaySettle()
      }
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
        path: 'platformNew/:platformTitle/:id',
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
        component: () => personPage(),
        meta: {
          title: "个人中心"
        }
      },
      {
        path: 'personInfo',
        name: "personInfoPage",
        component: () => personInfo(),
        meta: {
          title: "个人资料"
        }
      },
      {
        path: 'bindPhone',
        name: "bindPhonePage",
        component: () => bindPhone(),
        meta: {
          title: "绑定手机"
        }
      }
    ]
  },
  {
    path: '/functionPage/',
    component: () => functionIndex(),
    children: [{
        path: '',
        name: 'registerStatisticPage',
        component: () => registerStatistic(),
        meta: {
          title: '挂号统计'
        }
      },
      {
        path: 'medicalStatistic',
        name: 'medicalStatisticPage',
        component: () => medicalStatistic(),
        meta: {
          title: '就诊统计'
        }
      },
      {
        path: 'chargeStatistic',
        name: 'chargeStatisticPage',
        component: () => chargeStatistic(),
        meta: {
          title: '收费统计'
        }
      },
      {
        path: 'enterBound',
        name: 'enterBoundPage',
        component: () => enterBound(),
        meta: {
          title: '入库统计'
        }
      },
      {
        path: 'outerBound',
        name: 'outerBoundPage',
        component: () => outerBound(),
        meta: {
          title: '出库统计'
        }
      },
      {
        path: 'stockStatistic',
        name: 'stockStatisticPage',
        component: () => stockStatistic(),
        meta: {
          title: '库存查询'
        }
      }
    ]
  }
]

export default routes;
