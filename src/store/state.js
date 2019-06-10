let defaultReply = [
  {
    key: 1,
    replyName: '你好'
  },
  {
    key: 2,
    replyName: '请问有什么可以帮助你'
  }
]
let defaultKey = 2
// localStorage.defaultKey = 2;
// localStorage.defaultReply = [];
try {
  if (localStorage.defaultReply) {
    defaultReply = JSON.parse(localStorage.getItem('defaultReply'))
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
    logo: '',
    rest: ''
  },
  defaultGoods: require('@/assets/images/normalGoods.png'), //商品的默认图
  //物流公司
  logisticsCompany: [
    { key: 'SFEXPRESS', value: '顺丰速运' },
    { key: 'JD', value: '京东快递' },
    { key: 'QT', value: '其他' },
    { key: 'ZT', value: '自提' }
  ],
  //商品的类别
  goodsTypeList: [
    { code: 8, value: '全部' },
    { code: 7, value: '热门' },
    { code: 1, value: '饮片' },
    { code: 2, value: '颗粒' },
    { code: 3, value: '成药' },
    { code: 4, value: '西药' },
    { code: 5, value: '产品' },
    { code: 6, value: '器械' }
  ],
  userInfoState: {}, //客户信息
  chatSessionList: [], //session的聊天室数据
  defaultReply,
  defaultKey,
  cloundTab: { key: 'PATIENT', value: '患者病历', id: 0 },
  cloundTabList: [
    { key: 'PATIENT', value: '患者病历', id: 0 },
    { key: 'GRAIN', value: '配方颗粒', id: 1 },
    { key: 'CHINA_MEDICINE', value: '中药饮片', id: 2 },
    { key: 'PRODUCT', value: '成药处方', id: 3 }
  ],
  //模拟数据
  medFrequency: [
    { value: '每天一次' },
    { value: '每天两次' },
    { value: '每天三次' },
    { value: '每天四次' },
    { value: '两天一次' },
    { value: '每周一次' },
    { value: '饭前' },
    { value: '饭后' },
    { value: '睡前' },
    { value: '医嘱' }
  ],
  herbalRpUsages: [
    {
      id: 10,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '煎服',
      code: ''
    },
    {
      id: 15,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '泡水',
      code: ''
    },
    {
      id: 14,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '生吃',
      code: ''
    },
    {
      id: 13,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '直接服用',
      code: ''
    },
    {
      id: 12,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '温水助服',
      code: ''
    },
    {
      id: 11,
      clinic_id: 0,
      dict_code: 'USAGE_RP_HERBAL',
      value: '外敷',
      code: ''
    }
  ]
  // 云处方开方被选中的tar栏 默认患者病历
}
export default state
