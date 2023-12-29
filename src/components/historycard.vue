<template>
  <!-- Show Card Data -->
  <!-- <div class="pl-2 pr-2 pt-4 w-full"> -->
    <div class="m-1 bg-teal-200 p-2 border rounded-md w-full" style="background-color: #F4EDEA">
      <div class="flex items-center">
        <img src="https://avatars.githubusercontent.com/u/97021587?v=4" class="p-1 w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4" alt="Avatar" />
        <div class="ml-4 text-justify max-w-full">
          <div class="font-bold text-xl text-left border-b">{{ capitalizeEachWord(visitor.name) }}</div>
          <div class="text-left py-2">{{ capitalizeFirstLetter(visitor.relation) }}</div>
        </div>
        <div class="w-full text-right">{{ formatTime(visitor.date) }}</div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {

    props: {
        visitor: {
        type: Object,
        required: true,
        },
    },
    methods: {
        capitalizeEachWord(str) {
        return str
            .split(' ')
            .map(word => this.capitalizeFirstLetter(word))
            .join(' ');
        },
        capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
        },
        formatTime(timestamp) {
            const visitDate = new Date(timestamp * 1000);
            const hours = visitDate.getHours().toString().padStart(2, '0');
            const minutes = visitDate.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;
            return timeString;
    },

    }

};
</script>

<style>

</style>