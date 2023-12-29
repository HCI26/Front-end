<template>
  <div class="w-full h-full flex" style="background-color: #F4EDEA">
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
      axios.get('https://website-nuxt-back.herokuapp.com/api/user')
        .then((response) => {
          const userDataFromBackend = response.data;
          this.userData = new UserInfoDTO(userDataFromBackend);
          console.log("Loaded");

        })
        .catch((error) => {
          console.log(error);
        });
    },
  }
}
</script>

<style>

</style>