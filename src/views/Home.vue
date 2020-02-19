<template>
  <div class="home">
    <div class="test">1313</div>
    <el-dialog>
      <viewer :images="images">
        <img v-for="item in images" src="http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg" :key="item.index"
             height="100">
      </viewer>
    </el-dialog>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {result} from './tran.mock'

  export default {
    name: 'home',
    data() {
      return {
        images: [
          {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3272199364,3404297250&fm=26&gp=0.jpg',
            index: 1
          },
          {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3267295166,2381808815&fm=26&gp=0.jpg',
            index: 2
          },
          {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3429654663,2972188411&fm=26&gp=0.jpg',
            index: 3
          },
          {src: '', index: 4},
        ],
        result: result.object
      }
    },
    components: {},
    methods: {
      tranKeyS(ary) {
        let obj = {}
        //收集keys
        let keys = ary.map((item) => {
          return item.packageChargeEnumId
        });
        // console.log(keys, 'dddd');
        //用keys做属性组成对象
        keys.forEach((item) => {
          ary.forEach((a) => {
            if (item === a.packageChargeEnumId) {
              obj[item] = a.packageChargeRatio
            }
          })
        });
          return obj
      },
      tranData() {
        // let tempKeys = this.result[0].packageCharges.map(item => {
        //   return item.packageChargeEnumId
        // })
        // console.log(tempKeys);
        this.tranKeyS(this.result[0].packageCharges)
        let keysTran = this.result.map((item, index) => {
            let objTemp = this.tranKeyS(item.packageCharges)
          return {
            ...item, ...objTemp
          }
        })
        console.log(keysTran, 'keysTran');
      }
    },
    mounted() {
      console.log(this.result);
      this.tranData()
    }
  }
</script>
<style lang="scss" scoped>

</style>
