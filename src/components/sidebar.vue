<template>
  <div class="h-[100vh] fixed bg-gray-800 side-bar-visible " id="side-bar">
    <div class="bg-gray-700 h-[50px] flex justify-center items-center " style="background-color: #c5d8d1">
      <div class="text-xl font-bold text-center flex items-center justify-center text-black h-full">O B S E R V A</div>
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-gray-900" style="background-color: #12263a">
      <div class="menu-man text-left px-2 whitespace-nowrap ">
        <div class="profile flex justify-center items-center text-center p-5 ">
          <div class="flex flex-col justify-center items-center	 text-center text-white">
            <img src="https://avatars.githubusercontent.com/u/97021587?v=4" class="p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4" alt="Avatar" />
            <h5 class="text-xl font-medium leading-tight mb-2" style="color: #F4EDEA">{{userData.name}}</h5>
            <p class="text-gray-500">{{userData.email}}</p>
          </div>
        </div>
        <div class="   py-3 rounded-sm cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/" class="px-2 flex items-center text-xl space-x-2"><span class="pi pi-microsoft" v-tooltip.right="'Dashboard'"></span> <span>Dashboard</span></router-link>
        </div>
        <div class="   py-3 rounded-md cursor-pointer  text-gray-300 hover:text-white">
          <router-link to="/history" class="px-2 flex items-center text-xl space-x-2"><span class="pi pi-history " v-tooltip.right="'History'"></span> <span>History</span></router-link>
        </div>
        <div class="   py-3 rounded-md cursor-pointer  text-gray-300 hover:text-white">
          <router-link to="/visitors" class="px-2 flex items-center text-xl space-x-2"><span class="pi pi-users" v-tooltip.right="'Visitors'"></span> <span>Visitors</span></router-link>
        </div>
        <div class="  py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/setting" class="px-2 flex items-center text-xl space-x-2"><span class="pi pi-slack" v-tooltip.right="'Setting'"></span> <span>Setting</span></router-link>
        </div>
      </div>
      <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
        <div class="   py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
          <a href="https://website-nuxt-front.vercel.app/" target="_blank" class="px-2 flex space-x-2"><span class="pi pi-question" v-tooltip.right="'About Me'"></span> <span>About Me</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
        userData: {
        type: Object,
        required: true,
        },
    },

}
</script>

<style>
.p-tooltip-text {
  font-size: 10px !important;
}

#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 250px !important;
}

.side-bar-close {
  width: 50px !important;
}
</style>