export default {
    data() {
        return {
            maleImg: require("@/assets/images/nan@2x.png"),
            femaleImg: require("@/assets/images/nv@2x.png"),
            classifiedImg: require("@/assets/images/bm.png")
        }
    },
    methods: {
        //图片加载错误的时候
        error(item, e) {
            console.log(e)
            e.target.src = this.getNormalHead(item.sex); //默认图
        },
        // 头像的默认图
        getNormalHead(sex) {
            let index = Number(sex);
            switch (index) {
                case 0:
                    return this.classifiedImg;
                    break;
                case 1:
                    return this.maleImg;
                    break;
                case 2:
                    return this.femaleImg;
                    break;
            }
        },
        //如果有图片传入 就用传入的图片 否则用默认图
        imgNormalToggle(url,item) {
            return url == '' ? this.getNormalHead(item.sex) : url;
        }
    }
}
