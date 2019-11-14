const errorImg = {
  data() {
    return {
      normalGoods: require('@/assets/images/normalGoods.png')
    }
  },
  methods: {
    //图片加载错误的时候
    error(e) {
      e.target.src = this.normalGoods
    }
  }
}

const sexImg = {
  data() {
    return {
      maleImg: require('@/assets/images/nan@2x.png'),
      femaleImg: require('@/assets/images/nv@2x.png'),
      classifiedImg: require('@/assets/images/bm.png')
    }
  },
  methods: {
    getNormalHead(sex) {
      let index = Number(sex)
      switch (index) {
        case 0:
          return this.classifiedImg
        case 1:
          return this.maleImg
        case 2:
          return this.femaleImg
      }
    }
  }
}

export { errorImg, sexImg }
