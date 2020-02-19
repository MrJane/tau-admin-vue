<template>
  <div class="preview">
    <h1>视频video应用：截取封面图；监听播放状态</h1>
    <div class="video-con">
      <video ref="" class="video" poster="">
        <source src="../assets/《绝句》朗诵视频.mp4">
      </video>
      <button type="button" class="btn js-play-btn"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "preview",
    data() {
      return {
        hello: ''
      }
    }
  }
</script>

<style scoped>

</style>
