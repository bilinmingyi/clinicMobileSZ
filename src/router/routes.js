/* 路由表 */

const homePage =
    import ( /* webpackChunkName: "index" */ "@/pages/homePage/index");

const routes = [{
    path: '/',
    name: 'homePage',
    component: () => homePage
}]

export default routes;