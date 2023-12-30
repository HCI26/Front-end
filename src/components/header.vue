<template>
  <div class="header">
    <div class="flex justify-between items-center h-[50px]">
      <!-- Check if the current route name is "visitor" before rendering the button -->
      <div v-if="currentRouteName === 'Visitors'" class="p-4 cursor-pointer hover:bg-gray-50" @click="openEditDialog">
        <i class="pi pi-plus"> Add Visitor</i>
      </div>

      <div class="flex-1 flex items-center justify-center">
        <span class="router-name">{{currentRouteName}}</span>
      </div>
      <div class="flex space-x-3 items-center justify-center px-3">
        <div class="user" @click="toggle">User</div>
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>
    <div>
      <EditDialog
        v-if="showEditDialog"
        currentName=""
        currentRelation=""
        functionality="Add New Visitor"
        @save="handleSaveChanges"
        @close="closeEditDialog"
      />
    </div>
  </div>
</template>

<script>

import EditDialog from '@/components/editdialog'; // Adjust the path accordingly


export default {
  // props: {
  //   dataOpenSideBar: Boolean,
  //   clickHambuger: Function
  // },
  components: {EditDialog},
  data() {
    return {
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-refresh',
          command: () => {
            this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          }
        },
        {
          label: 'Change Password',
          icon: 'pi pi-times',
          command: () => {
            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          }
        },
      ],
      showEditDialog: false
    }
  },
  computed: {
    currentRouteName() {
      if (this.$route.name === 'visitors') {
        return 'Visitors';
      }
      else if (this.$route.name === 'history') {
        return 'History';
      }
      else if (this.$route.name === 'dashboard') {
        return 'Dashboard';
      }
      else if (this.$route.name === 'setting') {
        return 'Settings';
      }
      else {
        return 'Home';
      }

    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    openEditDialog() {
      this.showEditDialog = true;
    },
    closeEditDialog() {
      this.showEditDialog = false;
    },    
    clickHambuger() {
      // Emit an event to notify the parent component to open the EditDialog with empty values
      this.$emit('openEditDialog', {
        name: '',
        relation: '',
      });
    },


  }

}
</script>

<style>
.router-name {
  font-size: 1.8rem; /* Increased for prominence */
  font-weight: 500;
  text-align: center;
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  color: #333; /* Example color, adjust as needed */
  margin-top: 20px;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1); /* Optional shadow for depth */
}

@media (max-width: 600px) {
  .router-name {
    font-size: 1.5rem; /* Smaller size for mobile devices */
  }
}
.header{
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(200, 128, 96, 0.1); /* Soft shadow for depth */
  text-align: center; /* Center-align text for balance */
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* System font-stack */
  position: sticky;
  top: 0;
  z-index: 999;

}

.mr-2:hover {
  transform: translateY(-2px); /* Slight lift effect on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */

}
  .user{
  cursor: pointer; /* Change cursor to indicate interactivity */
  font-size: 1.2rem; /* Increased for prominence */
  font-weight: 500;
  text-align: center;
  color: #333; /* Example color, adjust as needed */
}
.user:hover {
  transform: translateY(-2px); /* Slight lift effect on hover */
  box-shadow: 0 6px 12px rgba(105, 100, 100, 0.2); /* Increased shadow on hover */
}


</style>