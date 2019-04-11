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

try {
  if (localStorage.defaultReply) {
    defaultReply = localStorage.defaultReply
  }
  if (localStorage.defaultKey) {
    defaultKey = localStorage.defaultKey
  }
  console.log(localStorage.defaultReply)
} catch (e) {
  localStorage.defaultReply=defaultReply
}





const state = {
  userInfoState: {}, //客户信息
  chatSessionList: [], //session的聊天室数据
  defaultReply,
  defaultKey
}
export default state;
