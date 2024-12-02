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
        margin-top: 16px;
        &__title{
            font-family: $heading;
            font-weight: 700;
            font-size: 14px;
            line-height: 16.8px;
            letter-spacing: 1.3px;
            margin-bottom: 20px;
        }
        &__nav{
            font-family: $parafont;
            font-weight: 400;
            font-size: 14px;
            line-height: 36px;
            letter-spacing: 1px;
        }
    }
</style>