<template>
    <div>
        <div class="grid grid-cols-2 gap w-full">
            <visitorCard :visitor="card" class ="visitorCard" v-for="(card, index) in visitors" :key="index" />
        </div>
    </div>
</template>

<script>
import visitorCard from '../components/visitorcard.vue';
import axios from 'axios';
// import VisitorHistoryDTO from '../DTOs/VisitorHistoryDTO';
export default {
    components: { visitorCard },
    data() {
        return {
            visitors: []
        };
    },
    created() {
        this.loadVisitors();
    },
    methods: {
async loadVisitors() {
    try {
        const response = await axios.get('http://192.168.255.180:5000/api/user/visitors/get');
        console.log("Loading data");
        console.log(response.data);

        // Transform the response data to match the desired structure
        const transformedVisitors = response.data.visitors;
        this.visitors = transformedVisitors;
        console.log(this.visitors); // Move this line here
        console.log("Loaded");
    } catch (error) {
        console.error(error);
    }
}
    }

}
</script>

<style scoped>


</style>
