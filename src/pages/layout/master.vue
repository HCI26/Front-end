<template>
  <div class="w-full h-full flex" style="background-color: #ffffff">
    <sidebar :userData="userData" />
    <div class="ml-64 flex flex-col w-full h-full ">
      <headerTop />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view :userData="userData"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import headerTop from './../../components/header.vue'
import sidebar from './../../components/sidebar.vue'
import UserInfoDTO from '../../DTOs/UserInfoDTO'

export default {
  components: { headerTop, sidebar },
  data() {
    return {
      userData: new UserInfoDTO({})
    }
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      axios.get('http://192.168.255.180:5000/api/user/info')
        .then((response) => {
          const userDataFromBackend = response.data;
          this.userData = new UserInfoDTO(userDataFromBackend);
          console.log("Loaded");

        })
        .catch((error) => {
          console.log("Errrrorrrrrrrrrr")
          console.log(error);
        });
    },
  }
}
</script>

<style>

</style>