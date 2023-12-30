<template>
  <!-- <div>dash</div> -->
  <div class="flex">
    <videoStream :videoUrl="videoUrl"/>
  </div>
  <br>
  <!-- <div class="pt-4">
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
  </div> -->
</template>

<script>
// import { mapGetters } from 'vuex';
import videoStream from './../components/videoplayer.vue'
import VueCookies from 'vue-cookies';
// import visitorHistoryCard from '../components/historycard.vue';

export default {
  components: { videoStream },
  data() {
    return {
      videoUrl: 'http://192.168.50.130:5000/api/video/',
      token:null

      // visitors: [
      //   {
      //     name: 'ahmed',
      //     relation: 'friend',
      //     date: 1702042966,
      //   },
      //   {
      //     name: 'ahmed',
      //     relation: 'friend',
      //     date: 1696772566,
      //   },
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1702053766,
      //   },
      //   {
      //     name: 'mahmoud',
      //     relation: 'friend',
      //     date: 1670517766,
      //   },
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1670517766,
      //   },
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1702053766,
      //   },
      //   // ... more visitors
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1702053766,
      //   },
      //   // ... more visitors
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1702053766,
      //   },
      //   // ... more visitors
      //   {
      //     name: 'mohamed',
      //     relation: 'friend',
      //     date: 1702053766,
      //   },
      //   // ... more visitors
      // ],
    };
  },
  created() {
    this.token = VueCookies.get('token');
    if (this.token == null) {
        this.$router.push('/login');
    }
    else{
      this.videoUrl = this.videoUrl + this.token;
    }
    // this.loadVisitorsHistory();
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