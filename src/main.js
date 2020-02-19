import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import Viewer from 'v-viewer'
import 'element-ui/lib/theme-chalk/index.css'
import 'viewerjs/dist/viewer.css'
import './assets/sass/base.scss'
Vue.use(ElementUI);
Vue.use(Viewer);
Viewer.setDefaults({
  
  ready: function (e) {
    console.log(e.type,'组件以初始化');
  },
  show: function (e) {
    console.log(e.type,'图片显示开始');
  },
  shown: function (e) {
    console.log(e.type,'图片显示结束');
  },
  hide: function (e) {
    console.log(e.type,'图片隐藏完成');
  },
  hidden: function (e) {
    console.log(e.type,'图片隐藏结束');
  },
  view: function (e) {
    console.log(e.type,'视图开始');
  },
  viewed: function (e) {
    console.log(e.type,'视图结束');
    // 索引为 1 的图片旋转20度
    if(e.detail.index === 1){
      this.viewer.rotate(20);
    }
  },
  zoom: function (e) {
    console.log(e.type,'图片缩放开始');
  },
  zoomed: function (e) {
    console.log(e.type,'图片缩放结束');
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
