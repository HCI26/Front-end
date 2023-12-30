<template>
  <!-- Show Card Data -->
  <!-- <div class="pl-2 pr-2 pt-4 w-full"> -->
  <div
    class="visitor-card">
    <div class="flex items-center">
      <img
        src="https://avatars.githubusercontent.com/u/97021587?v=4"
        class="p-1 w-12 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-4"
        alt="Avatar"
      />
      <div class="ml-4 text-justify max-w-full">
        <div class="visitor">
          {{ capitalizeEachWord(visitor.name) }}
        </div>
        <div class="visitor-relation">
          {{ capitalizeFirstLetter(visitor.relation) }}
        </div>
      </div>
      <div class="Date-class">{{ formatTime(visitor.date) }}</div>
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
        .split(" ")
        .map((word) => this.capitalizeFirstLetter(word))
        .join(" ");
    },
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    formatTime(timestamp) {
      const visitDate = new Date(timestamp * 1000);
      let hours = visitDate.getHours();
      const minutes = visitDate.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours.toString().padStart(2, "0") : "12"; // the hour '0' should be '12'
      const timeString = `${hours}:${minutes} ${ampm}`;
      return timeString;
    },
  },
};
</script>

<style>
.Date-class {
  margin-left: auto;
  margin-right: 0;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  font-family:'Courier New', Courier;
  text-align: right;
  
}
.visitor-relation {
  font-size: 15px;
  color: #2d8dba;
  margin-bottom: 10px;
  
}
.visitor {
  font-size: 20px; /* Sizable font for readability */
  color: #18252b; /* Deep color for sophistication */
  font-weight: bold; /* Bold for emphasis */
  text-transform: capitalize; /* Capitalize as a stylistic choice */
  letter-spacing: 1px; /* Spacing out letters for a touch of elegance */
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}
.visitor-card {
  background-color: #ffffff; /* White background for clarity */
  padding: 20px; /* Comfortable padding */
  border-radius: 15px; /* Soft, rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a 3D effect */
  margin: 10px auto 20px; /* Centered with a balanced bottom margin */
  width: 80%; /* Decreased width for a card-like appearance */
  max-width: 500px; /* Maximum width to maintain card proportions */
  display: left;
  flex-direction: column;
  align-items: left; /* Center items for a symmetrical look */
  transition: transform 0.3s ease-in-out; /* Smooth transition for interaction */
}

.visitor-card:hover {
  transform: translateY(-5px); /* Slight lift effect on hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Increased shadow on hover */
}


</style>