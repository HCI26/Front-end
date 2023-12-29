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
import VisitorHistoryDTO from '../DTOs/VisitorHistoryDTO';
export default {
    components: { visitorCard },
    data() {
        return {
            visitors: [
                {
                    "id": 1,
                    "name": "ahmed",
                    "relation": "firend"
                },
                {
                    "id": 2,
                    "name": "ahmed",
                    "relation": "Brother"
                },
                {
                    "id": 3,
                    "name": "ahmed",
                    "relation": "Father"
                },
                {
                    "id": 4,
                    "name": "ahmed",
                    "relation": "firend"
                }
                ]
        };
    },
    created() {
        this.loadVisitors();
    },
    methods: {
        loadVisitors() {
            axios.get('https://website-nuxt-back.herokuapp.com/api/user/visitors')
            .then((response) => {
                const visitors = response.data;
                this.visitors = new VisitorHistoryDTO(visitors);
                console.log("Loaded");
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

}
</script>

<style scoped>


</style>
