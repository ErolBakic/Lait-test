<script setup lang="ts">
    import { defineProps } from 'vue';

    const props = defineProps({
        title: String
    });
</script>

<template>
    <div class="footer-menu">
        <p class="footer-menu__title">{{ props.title ? props.title : '' }}</p>
        <ul class="footer-menu__nav">
            <slot></slot>
        </ul>
    </div>
</template>

<style lang="scss">
    .footer-menu{
        margin-left: 50px;
        margin-right: 50px;
        &__title{
            font-weight: bold;
            margin-bottom: 20px;
        }
        &__nav{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            line-height: 30px;
        }
    }
</style>