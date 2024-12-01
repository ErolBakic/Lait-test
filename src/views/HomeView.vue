<script setup lang="ts">
    import { ref, onMounted } from 'vue';

    // components
    import Header from '../components/Header.vue';
    import Btn from '@/components/Btn.vue';

    // types
    import type { Room } from '../types/Room';

    // rooms from api
    import { fetchRooms } from "../services/fetchRooms";

    // variables
    const rooms = ref<Room[]>([]);

    onMounted(async () => {
        rooms.value = await fetchRooms();

        console.log(rooms.value);
    });

</script>

<template>
    <div>
        <Header bgImage="/hero/heroHome.jpg">
            <h1>Nyt hotel i centrum af odense</h1>
            <Btn link="/om-hotels"/>
        </Header>
    </div>
</template>

<style lang="scss" scoped>

</style>