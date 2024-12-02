<script setup lang="ts">
    import { defineProps, computed } from 'vue';
    import { RouterLink } from 'vue-router';

    // components
    import BtnAlt from './BtnAlt.vue';

    // types
    import type { Room } from '../types/Room';

    // props
    const props = defineProps<{ rooms: Room[] }>();

    // get the first 4 rooms
    const rooms = computed(() => props.rooms.slice(0, 4));

</script>

<template>
    <nav class="room-list">
        <div class="wrapper">
            <ul class="rooms">
                <li class="rooms__item" v-for="room in rooms" :key="room.id">
                    <RouterLink :to="'værelser/' + room.id" >
                        <img class="img" :src="room.img" :alt="room.type">
                        <h2 class="title">{{ room.type }}</h2>
                        <BtnAlt>
                            Læs mere
                        </BtnAlt>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .room-list{
        .rooms{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            &__item{
                max-width: 510px;
                max-height: 750px;
                &:nth-child(3n+1){
                    max-width: 620px;
                    max-height: 882px;
                }
                &:nth-child(n+3){
                    margin-top: 80px;
                }
                .title{
                    font-family: $heading;
                    font-weight: 400;
                    font-size: 36px;
                    line-height: 40px;
                    letter-spacing: 0.32px;
                    color: $secondary;
                    margin-top: 40px;
                }
            }
        }
    }
</style>