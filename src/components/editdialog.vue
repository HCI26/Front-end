<template>
  <div
    class="flex w-full h-full justify-center items-center fixed"
    :style="{ zIndex: 10000 }"
  >
    <!-- Background -->
    <div
      class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0"
      @click="closeDialog"
    ></div>
    <!-- Form -->
    <div
      class="flex justify-center items-center top-[15%] fixed sticky-0 left-[40%]"
    >
      <div
        class="md:w-auto relative flex flex-col justify-center items-center bg-white p-8"
      >
        <div class="my-5">
          <h1
            role="main"
            class="text-xl font-semibold text-center text-gray-800"
          >
            {{functionality}}
          </h1>
        </div>
        <div class="mt-2 flex flex-col space-y-2">
          <!-- Image upload -->
          <div
            class="flex flex-col justify-center items-center text-center text-white"
          >
            <img
              id="userImage"
              :src="
                uploadedImage ||
                'https://avatars.githubusercontent.com/u/97021587?v=4'
              "
              @click="selectImage"
              class="hover:cursor-pointer p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
              alt="User Image"
            />
          </div>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style="display: none"
            @change="handleImageUpload"
          />

          <!-- Name and Relation input -->
          <input
            type="text"
            class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
            placeholder="Name"
            v-model="editedName"
          />
          <input
            type="text"
            class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
            placeholder="Relation"
            v-model="editedRelation"
          />
        </div>
        <div class="flex space-x-2 pt-2">
          <button
            class="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-400"
            @click="saveChanges"
          >
            Save
          </button>
          <button
            class="px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-400"
            @click="closeDialog"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    visitor: {
      type: Object,
      required: true,
    },
    functionality: String
  },
  data() {
    return {
      editedName: this.visitor.name,
      editedRelation: this.visitor.relation,
      uploadedImage: null,
    };
  },
  methods: {
    saveChanges() {
      if (this.functionality === "Add New Visitor") {
        this.saveNewVisitor()
        .then(() => {
            this.closeDialog();
        })
      } else {
        this.editVisitor()
        .then(() => {
            this.closeDialog();
        })
      }
    },
async saveNewVisitor() {
  const formData = new FormData();
  formData.append('name', this.editedName);
  formData.append('relation', this.editedRelation);
  const blob = this.dataURItoBlob(this.uploadedImage);
  formData.append('image', blob, 'image.jpg');

  try {
    await axios.post('http://192.168.255.180:5000/api/user/visitors/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    this.closeDialog();
  } catch (error) {
    console.error('Error saving new visitor:', error);
  }
},
  dataURItoBlob(dataURI) {
    const arr = dataURI.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  },
    async editVisitor() {
      const visitorId = this.visitor.id;
      const formData = new FormData();
      formData.append('name', this.editedName);
      formData.append('relation', this.editedRelation);
      formData.append('id', visitorId);
      const blob = this.dataURItoBlob(this.uploadedImage);
      formData.append('image', blob, 'image.jpg');
      await axios.post('http://192.168.255.180:5000/api/user/visitors/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        console.log("Loaded");
      })
      .catch((error) => {
        console.log(error);
        console.error("Error:", this.visitor.id);
      });

      
    },
    closeDialog() {
      this.$emit("close");
      this.$router.go(); 
    },
    selectImage() {
      document.getElementById("imageInput").click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styling for the modal */
/* You can adapt the styles based on your application's design */
</style>
