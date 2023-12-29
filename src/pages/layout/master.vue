<template>
  <div class="w-full h-full flex" style="background-color: #ffffff">
    <sidebar :userData="userData" />
    <div class="ml-64 flex flex-col w-full h-full ">
      <headerTop />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headerTop from './../../components/header.vue'
import sidebar from './../../components/sidebar.vue'

export default {
  components: { headerTop, sidebar },
  data() {
    return {
      userData: {} 
    }
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      this.userData = {
        "name": "ahmed",
        "email": "example@google.com"
      }
      // try {
      //   const response = await fetch('your_backend_api_url');
      //   const userData = await response.json();
      //   this.userData = userData;
      // } catch (error) {
      //   console.error('Error fetching user data:', error);
      // }
    },
  }
}
</script>

<style>

</style>