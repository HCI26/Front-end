<template>
  <div id="app">
    <img id="video-stream" :src="videoUrl" alt="Video Stream">
  </div>
</template>


<script>
export default {
  props:{
    videoUrl:{
      type:String,
      required:true
    }
  }
  // data() {
  //   return {
  //     videoUrl: 'http://192.168.50.130:5000/api/video/',
  //     token:null
  //   };
  // },
  // beforeCreate() {
  //   this.token = VueCookies.get('token');
  //   if (this.token == null) {
  //       this.$router.push('/login');
  //   }
  //   else{
  //     this.videoUrl = this.videoUrl + this.token;
  //   }
  // }
};
</script>

<style>
#video-stream {
  max-width: 100%;
}
</style>