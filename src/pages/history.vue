<template>
  <div class="pt-4">
    <div class="p-5 bg-orange-300 m-2 rounded-md shadow-md" style="background-color: #daeaecb7"  v-for="(group, date) in categorizedVisitors" :key="date">
      <h2>{{ date }}</h2>
      <ul class="list-none flex flex-wrap">
        <visitorHistoryCard
          v-for="visitor in group"
          :key="visitor.date"
          :visitor="visitor"
        /> 
           
      </ul>
    </div>
  </div>
  
</template>

<script>
import visitorHistoryCard from '../components/historycard.vue';

export default {
  components: { visitorHistoryCard },
  data() {
    return {
      visitors: [
        {
          name: 'ahmed',
          relation: 'friend',
          date: 1702042966,
        },
        {
          name: 'ahmed',
          relation: 'friend',
          date: 1696772566,
        },
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1702053766,
        },
        {
          name: 'mahmoud',
          relation: 'friend',
          date: 1670517766,
        },
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1670517766,
        },
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1702053766,
        },
        // ... more visitors
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1702053766,
        },
        // ... more visitors
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1702053766,
        },
        // ... more visitors
        {
          name: 'mohamed',
          relation: 'friend',
          date: 1702053766,
        },
        // ... more visitors
      ],
    };
  },
  computed: {
    categorizedVisitors() {
      const groupedVisitors = {};

      this.visitors.forEach(visitor => {
        const visitDate = new Date(visitor.date * 1000);
        const dateString = visitDate.toISOString().split('T')[0];

        if (!groupedVisitors[dateString]) {
          groupedVisitors[dateString] = [];
        }

        groupedVisitors[dateString].push(visitor);
      });

      return groupedVisitors;
    },
  },
};
</script>

<style>
/* Other styles... */

h2 {
  color: #ffffff;
  font-size: 1.2rem; /* A smaller font size for a more professional look */
  margin-bottom: 0.5rem; /* Reduced space below the header */
  background-color: #1d3f60; /* A professional dark teal */
  padding: 10px 20px; /* Adequate padding for a pill-like shape */
  border-radius: 15px; /* Fully rounded corners for a modern pill effect */
  box-shadow: 0 4px 8px rgba(200, 128, 96, 0.1); /* Soft shadow for depth */
  text-align: center; /* Center-align text for balance */
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* System font-stack */
  display: inline-block; /* Make the header inline for content size */
  width: auto; /* Auto width to fit content */
  margin-right: 20px; /* Space to the right if next to other elements */
  float: center; /* Align to the right of the container */
}








/* Media queries and other styles... */
</style>