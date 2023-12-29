<!-- VisitorCard.vue -->

<template>
  <div class="m-3 bg-zinc-200 p-2 border rounded-md">
    <div class="flex items-center">
      <img src="https://avatars.githubusercontent.com/u/97021587?v=4" class="p-1 w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4" alt="Avatar" />
      <div class="ml-4 text-justify max-w-full">
        <div class="font-bold text-xl text-left border-b">{{ name }}</div>
        <div class="text-left py-2">{{ relation }}</div>
      </div>
      <div class="w-full mr-3 text-right">
        <span>Last visit</span>
        <span class="pi pi-ellipsis-v hover:cursor-pointer" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"></span>
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
      </div>
    </div>
    <EditDialog
      v-if="showEditDialog"
      :currentName="visitor.name"
      :currentRelation="visitor.relation"
      functionality = "Update Visitor"
      @save="handleSaveChanges"
      @close="closeEditDialog"
    />
  </div>
</template>

<script>
import EditDialog from '@/components/editdialog'; // Adjust the path accordingly

export default {
  components: {EditDialog},
  props: {
    visitor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-user-edit',
          command: () => {
            this.openEditDialog();
          },
        },
        {
          label: 'Delete',
          icon: 'pi pi-times-circle',
          command: () => {
            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          },
        },
      ],
      showEditDialog: false,
      name: this.visitor.name,
      relation: this.visitor.relation
    };
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
    handleSaveChanges({ name, relation }) {
        this.name = name;
        this.relation = relation;
        this.closeEditDialog();
    },
  },
};
</script>

<style>
/* Add your styling for the VisitorCard component */
</style>
