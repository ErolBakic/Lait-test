<script setup lang="ts">
    import { defineProps } from 'vue';

    // types
    import type { Room } from '../types/Room';

    const props = defineProps<{
        rooms?: Room[];
        bgColor: 'primary' | 'secondary' | 'white' | 'black';
        titleLeft?: string;
        titleRight?: string;
    }>();
</script>

<template>
    <main class="main-content" :class="`main-content--${props.bgColor}`">
        <div class="wrapper">
            <div class="content">
                <div :class="['content__left', { 'content__left--push': props.titleRight }]">
                    <h3 class="title" v-if="props.titleLeft">{{ props.titleLeft }}</h3>
                    <slot name="left"></slot>
                </div>

                <div class="content__right">
                    <h2 class="title" v-if="props.titleRight">{{ props.titleRight }}</h2>
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .main-content{
        padding-top: 80px;
        padding-bottom: 80px;
        &--primary{
            background-color: $primary;
            color: $secondary;
        }
        &--secondary{
            background-color: $secondary;
            color: $white;
        }
        &--white{
            background-color: $white;
            color: $secondary;
        }
        &--black{
            background-color: $dark;
            color: $white;
        }
        .content{
            display: flex;
            &__left{
                max-width: 300px;
                width: 100%;
                margin-right: 22px;
                .title{
                    font-family: $heading;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19.2px;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    transform: translateY(10px);
                }
                &--push .title{
                    margin-top: 60px;
                    
                }
            }
            &__right{
                .title{
                    font-size: 36px;
                    margin-bottom: 20px;
                    font-family: $heading;
                    font-weight: 400;
                    line-height: 40px;
                    letter-spacing: 0.32px;
                }
                font-family: $parafont;
                font-weight: 400;
                font-size: 20px;
                line-height: 36px;
            }
        }
    }
</style>