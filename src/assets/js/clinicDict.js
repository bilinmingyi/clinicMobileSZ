const clinicDict = {
  //多点执业标志
  dyflagType: [{ code: 0, name: '否' }, { code: 1, name: '是' }],

  //多点执业标志
  dzflagType: [{ code: 0, name: '否' }, { code: 1, name: '是' }],

  //处方资格标识
  czflagType: [{ code: 0, name: '否' }, { code: 1, name: '是' }],

  //处方资格标识
  czflagType: [{ code: 0, name: '否' }, { code: 1, name: '是' }],

  //是否在职
  isjobType: [
    { code: 0, name: '不在职' },
    { code: 1, name: '在职' },
    { code: 2, name: '返聘' },
    { code: 3, name: '临聘' },
    { code: 4, name: '返聘不满半年' },
    { code: 5, name: '临聘不满半年' }
  ],

  //执业类别
  practicecategoryType: [
    { code: 1, name: '临床' },
    { code: 2, name: '口腔' },
    { code: 3, name: '公共卫生' },
    { code: 4, name: '中医' }
  ],

  //医生级别
  doctorlevelType: [
    { code: 1, name: '执业医师' },
    { code: 2, name: '执业助理医师' }
  ],

  //大病类别
  seriousIllness: [
    { code: 'AI.00', name: '艾滋病门诊专科治疗' },
    { code: 'D55.1SE', name: '再生障碍性贫血' },
    { code: 'D56', name: '地中海贫血' },
    { code: 'D66.1SE', name: '血友病' },
    { code: 'F20.00', name: '精神分裂症门诊专科治疗' },
    { code: 'F20.10', name: '分裂情感性障碍门诊专科治疗' },
    { code: 'F20.20', name: '持久的妄想性障碍（偏执性精神病）门诊专科治疗' },
    { code: 'F20.30', name: '双相（情感）障碍门诊专科治疗' },
    { code: 'F20.40', name: '癫痫所致精神障碍门诊专科治疗' },
    { code: 'F20.50', name: '精神发育迟滞伴发精神障碍门诊专科治疗' },
    { code: 'R90.00', name: '颅内良性肿瘤专科治疗' },
    { code: 'T86', name: '器官移植后抗排斥' },
    { code: 'Z08.1', name: '恶性肿瘤放疗' },
    { code: 'Z08.2', name: '恶性肿瘤化疗' },
    { code: 'Z08.8', name: '恶性肿瘤介入或核素治疗' },
    { code: 'Z49.201', name: '肾衰腹透' },
    { code: 'Z99.2', name: '肾衰血透' }
  ],

  //学历
  educationType: [
    { code: 11, name: '博士研究生' },
    { code: 14, name: '硕士研究生' },
    { code: 21, name: '大学本科' },
    { code: 31, name: '大学专科' },
    { code: 41, name: '中等专科' },
    { code: 44, name: '职业高中' },
    { code: 47, name: '技工学校' },
    { code: 61, name: '普通高中' },
    { code: 71, name: '初级中学' },
    { code: 81, name: '小学' },
    { code: 90, name: '其他' }
  ],

  //证件类型
  credentialsType: [
    { code: '01', name: '居民身份证（户口簿）' },
    { code: '02', name: '中国人民解放军军官证' },
    { code: '03', name: '中国人民武装警察警官证' },
    { code: '04', name: '香港特区护照/港澳居民来往内地通行证' },
    { code: '05', name: '澳门特区护照/港澳居民来往内地通行证' },
    { code: '06', name: '台湾居民来往大陆通行证' },
    { code: '07', name: '外国人永久居留证' },
    { code: '08', name: '外国人护照' },
    { code: '09', name: '残疾人证' },
    { code: '10', name: '军烈属证' },
    { code: '11', name: '外国人就业证' },
    { code: '12', name: '外国专家证' },
    { code: '13', name: '外国人常驻记者证' },
    { code: '14', name: '台港澳人员就业证' },
    { code: '15', name: '回国(来华)定居专家证' },
    { code: '90', name: '社会保障卡' },
    { code: '99', name: '其他身份证件' }
  ],

  //民族
  nationalType: [
    { code: '01', name: '汉族' },
    { code: '02', name: '蒙古族' },
    { code: '03', name: '回族' },
    { code: '04', name: '藏族' },
    { code: '05', name: '维吾尔族' },
    { code: '06', name: '苗族' },
    { code: '07', name: '彝族' },
    { code: '08', name: '壮族' },
    { code: '09', name: '布依族' },
    { code: '10', name: '朝鲜族' },
    { code: '11', name: '满族' },
    { code: '12', name: '侗族' },
    { code: '13', name: '瑶族' },
    { code: '14', name: '白族' },
    { code: '15', name: '土家族' },
    { code: '16', name: '哈尼族' },
    { code: '17', name: '哈萨克族' },
    { code: '18', name: '傣族' },
    { code: '19', name: '黎族' },
    { code: '20', name: '傈傈族' },
    { code: '21', name: '佤族' },
    { code: '22', name: '畲族' },
    { code: '23', name: '高山族' },
    { code: '24', name: '拉祜族' },
    { code: '25', name: '水族' },
    { code: '26', name: '东乡族' },
    { code: '27', name: '纳西族' },
    { code: '28', name: '景颇族' },
    { code: '29', name: '柯尔克孜族' },
    { code: '30', name: '土族' },
    { code: '31', name: '达翰尔族' },
    { code: '32', name: '仫佬族' },
    { code: '33', name: '羌族' },
    { code: '34', name: '布朗族' },
    { code: '35', name: '撒拉族' },
    { code: '36', name: '毛南族' },
    { code: '37', name: '仡佬族' },
    { code: '38', name: '锡伯族' },
    { code: '39', name: '阿昌族' },
    { code: '40', name: '普米族' },
    { code: '41', name: '塔吉克族' },
    { code: '42', name: '怒族' },
    { code: '43', name: '乌孜别克族' },
    { code: '44', name: '俄罗斯族' },
    { code: '45', name: '鄂温克族' },
    { code: '46', name: '德昂族' },
    { code: '47', name: '保安族' },
    { code: '48', name: '裕固族' },
    { code: '49', name: '京族' },
    { code: '50', name: '塔塔尔族' },
    { code: '51', name: '独龙族' },
    { code: '52', name: '鄂伦春族' },
    { code: '53', name: '赫哲族' },
    { code: '54', name: '门巴族' },
    { code: '55', name: '珞巴族' },
    { code: '56', name: '基诺族' },
    { code: '57', name: '穿青族' },
    { code: '99', name: '其他' }
  ],

  //医护人员类别
  medicType: [{ code: 1, name: '医师' }, { code: 2, name: '药师' }],

  //医生职称
  professionalType: [
    { code: 0, name: '未知' },
    { code: 1, name: '中医师' },
    { code: 2, name: '主治医师' },
    { code: 3, name: '副主任医师' },
    { code: 4, name: '主任医师' }
  ],

  //就诊类型
  quickType: [{ code: 0, name: '复诊' }, { code: 1, name: '初诊' }],

  // tpl模板类型
  tplScope: [{ code: 0, name: '共享' }, { code: 1, name: '个人' }],

  // 性别
  sex: [
    { code: 0, name: '保密' },
    { code: 1, name: '男' },
    { code: 2, name: '女' }
  ],

  // 婚姻状况
  maritalStatus: [
    { code: 0, name: '保密' },
    { code: 1, name: '已婚' },
    { code: 2, name: '未婚' }
  ],

  // abo血型
  bloodAbo: [
    { code: 0, name: '未知' },
    { code: 1, name: 'A型' },
    { code: 2, name: 'B型' },
    { code: 3, name: 'AB型' },
    { code: 4, name: 'O型' }
  ],

  // rh血型
  bloodRh: [
    { code: 0, name: '未知' },
    { code: 1, name: '阴性' },
    { code: 2, name: '阳性' }
  ],

  // 中药类型
  herbalCategory: [
    { code: 1, name: '饮片' },
    { code: 2, name: '颗粒' }
    // {code: 3, name: '云药房饮片'},
    // {code: 4, name: '云药房颗粒'},
  ],

  //中药云药房附加项目
  herbalextraFeeTypes: [
    { code: 1, name: '打粉', price: 5 },
    { code: 2, name: '代煎', price: 5 }
  ],

  // 药房类型
  pharmacyCategory: [
    { code: 0, name: '诊所药房' },
    { code: 1, name: '云药房' }
  ],

  // 西药类型
  westernCategory: [{ code: 1, name: '成药' }, { code: 2, name: '西药' }],

  payType: [
    { code: 3, name: '银行卡' },
    { code: 4, name: '微信' },
    { code: 5, name: '支付宝' },
    { code: 6, name: '现金' },
    { code: 7, name: '医保卡' },
    { code: 9, name: '平台支付' }
  ],

  payTypeDetail: [
    { code: 0, name: '未知' },
    { code: 1, name: '微信线上' },
    { code: 2, name: '支付宝线上' },
    { code: 3, name: '银行卡' },
    { code: 4, name: '微信线下' },
    { code: 5, name: '支付宝线下' },
    { code: 6, name: '现金' },
    { code: 7, name: '医保卡' },
    { code: 9, name: '平台支付' }
  ],

  PurchaseStatus: [
    { code: 'UNKNOWN', name: '未知' },
    { code: 'WAIT_AUDIT', name: '待审核' },
    { code: 'INIT', name: '待提交' },
    { code: 'UNPAID', name: '待付款' },
    { code: 'DISPENSING', name: '待配药' },
    { code: 'DELIVERING', name: '待发货' },
    { code: 'WAIT_INSTOCK', name: '待收货' },
    { code: 'DONE', name: '完成' },
    { code: 'BACK', name: '回退' }
  ],

  TreatOrderStatus: [
    { code: 'UNKNOWN', name: '未知' },
    { code: 'UNCOMMIT', name: '就诊中' },
    { code: 'UNPAID', name: '待支付' },
    { code: 'DISPENSING', name: '配药中' },
    { code: 'DONE', name: '完成' },
    { code: 'CANCEL', name: '取消' }
  ],

  appointStatus: [
    { code: 'UNKNOWN', name: '未知' },
    { code: 'UNPAID', name: '预约待支付' },
    { code: 'SZJK_PAYING', name: '挂号待支付' },
    { code: 'SIGN_WAITING', name: '待登记' },
    { code: 'TREAT_WAITING', name: '待就诊' },
    { code: 'DONE', name: '完成' },
    { code: 'CANCEL', name: '取消' }
  ],

  costType: [{ code: 0, name: '预约' }, { code: 1, name: '诊金' }],

  chargeType: [
    { code: 1, name: '挂号收费' },
    { code: 2, name: '就诊收费' },
    { code: 3, name: '云药房付费' },
    { code: 9, name: '总计' }
  ],

  medType: [
    { code: 0, name: '未知' },
    { code: 1, name: '中药' },
    { code: 2, name: '中成药西药' },
    { code: 3, name: '产品' },
    { code: 4, name: '项目' },
    { code: 5, name: '附加项目' },
    { code: 6, name: '材料' }
  ],

  medSource: [{ code: 0, name: '本诊所' }, { code: 1, name: '云药房' }],
  settingStatus: [{ code: 0, name: '停用' }, { code: 1, name: '启用' }],

  medStatus: [{ code: 0, name: '停用' }, { code: 1, name: '正常' }],

  libraryType: [
    { code: 0, name: '其他' },
    { code: 1, name: '退货' },
    { code: 2, name: '破损' },
    { code: 3, name: '云诊所采购' }
  ],

  confType: [{ code: 0, name: '系统' }, { code: 1, name: '自建' }],

  appointEnabled: [{ code: 0, name: '关闭' }, { code: 1, name: '开启' }],

  therapyType: [
    { code: 1, name: '治疗' },
    { code: 2, name: '检验' },
    { code: 3, name: '检查' },
    { code: 4, name: '其他' }
  ],

  isOnlineType: [{ code: 0, name: '直接挂号' }, { code: 1, name: '预约挂号' }],

  priceType: [{ code: 1, name: '收费' }, { code: 2, name: '退费' }],

  businessType: [{ code: 1, name: '预约' }, { code: 2, name: '挂号' }],

  articleType: [{ code: 1, name: '资讯' }, { code: 2, name: '诊所动态' }],

  doctorOrderType: [
    { code: 'UNCOMMIT', name: '未提交' },
    { code: 'UNPAID', name: '待支付' },
    { code: 'DISPENSING', name: '配药中' },
    { code: 'DELIVER', name: '配送中' },
    { code: 'DONE', name: '完成' },
    { code: 'UNKNOWN', name: '未知' },
    { code: 'CANCEL', name: '取消' }
  ],
  orderSource: [
    { code: 'DAYI', name: '健康网' },
    { code: 'GZH', name: '诊所小号' }
  ],
  uploadStatus: [
    { code: 0, name: '未上传' },
    { code: 1, name: '已上传' },
    { code: 2, name: '部分上传' }
  ],
  clinicType: [
    { code: 1, name: '诊所' },
    { code: 2, name: '门诊部' },
    { code: 3, name: '医务室' },
    { code: 4, name: '卫生所' },
    { code: 5, name: '工作室' }
  ],
  //商品订单的状态
  orderStatus: [
    { code: 'UNKNOWN', name: '未知' },
    { code: 'AUDIT', name: '待审核' },
    { code: 'REFUSE', name: '审核拒绝' },
    { code: 'UNPAID4BUSINESS', name: '待付款' },
    { code: 'UNPAID4CLIENT', name: '待收款' },
    { code: 'DELIVER', name: '待发货' },
    { code: 'WAIT_INSTOCK', name: '待收货' },
    { code: 'DONE', name: '完成' },
    { code: 'CANCEL', name: '取消' }
  ],
  logisticsFilter: [
    { code: 'SFEXPRESS', name: '顺丰速运' },
    { code: 'JD', name: '京东快递' },
    { code: 'QT', name: '其他' },
    { code: 'ZT', name: '自提' }
  ]
}

for (var key in clinicDict) {
  clinicDict[key].codeToName = function(code) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].code == code) {
        return this[i].name
      }
    }
    return null
  }
}

export default clinicDict
