<template>
  <div class="w-full bg-gray-100 top-0">
    <div class="flex justify-between items-center h-[50px]">
      <div class="p-4 cursor-pointer  hover:bg-gray-50" @click="openEditDialog">
        <i class="pi pi-plus"> Add Visitor</i>
      </div>

      <div class="py-5">
        <span class="text-center">{{currentRouteName}}</span>
        <!-- <InputText type="text" v-model="value" class="h-[40px]" :placeholder="currentRouteName" /> -->
      </div>
      <div class="flex space-x-3 items-center justify-center px-3">
        <div class="text-md">User</div>
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>
    <div>
      <EditDialog
      v-if="showEditDialog"
      currentName=""
      currentRelation=""
      functionality = "Add New Visitor"
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
      return this.$route.name;
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

</style>