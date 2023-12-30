<template>
  <div>
    <video ref="videoPlayer" controls width="600" height="400"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSrc: "http://192.168.50.130:5000/api/video",
    };
  },
  mounted() {
    this.initVideoPlayer();
  },
  methods: {
    initVideoPlayer() {
      const videoPlayer = this.$refs.videoPlayer;

      // Create XMLHttpRequest object
      const xhr = new XMLHttpRequest();
      xhr.open("GET", this.videoSrc, true);
      xhr.responseType = "arraybuffer";

      xhr.onload = function () {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: "video/mp4" });
          const videoUrl = URL.createObjectURL(blob);
          videoPlayer.src = videoUrl;
        }
      };

      xhr.onerror = function (error) {
        console.error("Error loading video:", error);
      };

      // Make the request
      xhr.send();
    },
  },
};
</script>

<style scoped>
/* Add any styling if necessary */
</style>
