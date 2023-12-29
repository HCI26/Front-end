<template>
    <div>
        <div class="grid grid-cols-2 gap w-full">
            <visitorCard :visitor="card" class ="visitorCard" v-for="(card, index) in visitorCards" :key="index" />
        </div>
    </div>
</template>

<script>
import visitorCard from '../components/visitorcard.vue';

export default {
    components: { visitorCard },
    data() {
        return {
            visitorCards: [
                {
                    "name": "ahmed",
                    "relation": "firend"
                },
                {
                    "name": "ahmed",
                    "relation": "Brother"
                },
                {
                    "name": "ahmed",
                    "relation": "Father"
                },
                {
                    "name": "ahmed",
                    "relation": "firend"
                }
                ] // Adjust the number based on your requirement
        };
    },
}
</script>

<style scoped>


</style>
