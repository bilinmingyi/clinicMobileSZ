let defaultReply = [{
        key: 1,
        replyName: '你好'
    },
    {
        key: 2,
        replyName: '请问有什么可以帮助你'
    }
];
let defaultKey = 2;
// localStorage.defaultKey = 2;
// localStorage.defaultReply = [];
try {
    if (localStorage.defaultReply) {
        defaultReply = JSON.parse(localStorage.getItem("defaultReply"))
    }
    if (localStorage.defaultKey) {
        defaultKey = localStorage.defaultKey
    }
} catch (e) {}





const state = {
    clinic: {
        id: '',
        name: '',
        customerPhone: '',
        provinceName: '',
        provinceCode: '',
        cityName: '',
        cityCode: '',
        countyName: '',
        countyCode: '',
        address: '',
        logo: ''
    },
    userInfoState: {}, //客户信息
    chatSessionList: [], //session的聊天室数据
    defaultReply,
    defaultKey,

}
export default state;