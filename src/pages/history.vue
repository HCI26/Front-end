<template>
  <div class="pt-4">
    <div class="p-5 bg-orange-300 m-2 rounded-md shadow-md" style="background-color: #06bcc1"  v-for="(group, date) in categorizedVisitors" :key="date">
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

</style>