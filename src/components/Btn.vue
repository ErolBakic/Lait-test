<script setup lang="ts">
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    // types
    import type { Btn } from '@/types/Btn';

    const props = defineProps<Btn>();
</script>

<template>
    <div class="btn">
        <RouterLink :to="props.link ? props.link : '/'" class="btn__link">{{ props.text ? props.text : 'Læs mere' }}</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
    .btn{
        background-color: $secondary;
        display: inline-flex;
        &__link{
            padding: 20px 60px;
            color: $white;
            text-transform: uppercase;
            font-family: $parafont;
            font-weight: 800;
            font-size: 15px;
            line-height: 20.49px;
            letter-spacing: 1.5px;
        }
    }
</style>