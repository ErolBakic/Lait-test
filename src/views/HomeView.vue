<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    // components
    import Header from '../components/Header.vue';
    import Btn from '@/components/Btn.vue';
    import MainContent from '@/components/MainContent.vue';

    // types
    import type { Room } from '../types/Room';

    // rooms from api
    import { fetchRooms } from "../services/fetchRooms";

    // variables
    const rooms = ref<Room[]>([]);

    // Get route
    const route = useRoute();

    onMounted(async () => {
        // Fetch the rooms
        rooms.value = await fetchRooms();

        // Set the title
        if (route.name) {
            document.title = route.name.toString();
        }
    });

</script>

<template>
    <Header bgImage="/hero/heroHome.jpg">
        <h1>Nyt hotel i centrum af odense</h1>
        <Btn link="/om-hotels"/>
    </Header>

    <MainContent class="main-content" :rooms="rooms" bgColor="primary">
        <template #left>
            <p class="uppercase">Om Alpha</p>
        </template>

        <template #right>
            <p>Alpha Hotels er Odenses Nyeste hotel beliggende i hjertet af Odense C. Hotellet åbner officielt dørene for gæster i vinter 2020</p>
            <p>Hotellet tilbyder 390 helt nyrenoverede værelser, en smuk ny café og en fredfyldt grøn gårdhave åben for hotellets gæster, lokale og forbipasserende. Cafeen og gårdhaven er indrettet til at få alle til at føle sig velkomne uanset anledningen.</p>
        </template>
    </MainContent>

    <MainContent class="main-content" :rooms="rooms" bgColor="primary">
        <template #left></template>

        <template #right>
            <p>Omgivet af bøgeskov og med udsigt til fjorden ligger vores smukke hotel - også kaldet "Slottet i skoven"</p>
            <p>Du kan bestille hotel overnatninger - men også dejlige spaophold, som på Hotel Alpha ALTID er inklusiv adgang til De Termiske Bade & Thalasso Spa, middag, overnatning og morgenbuffet.</p>    
        </template>
    </MainContent>
</template>

<style lang="scss" scoped>
    .main-content{
        p{
            margin-bottom: 30px;
        }
    }
</style>