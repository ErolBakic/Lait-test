<script setup lang="ts">
    import { defineProps } from 'vue';

    // types
    import type { Room } from '../types/Room';

    const props = defineProps<{
        rooms?: Room[];
        bgColor: 'primary' | 'secondary' | 'white' | 'black';
        title?: string;
    }>();
</script>

<template>
    <main class="main-content" :class="`main-content--${props.bgColor}`">
        <div class="wrapper">
            <div class="content">
                <div :class="['content__left', { 'content__left--push': props.title }]">
                    <slot name="left"></slot>
                </div>

                <div class="content__right">
                    <h2 class="title" v-if="props.title">{{ props.title }}</h2>
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
                margin-right: 20px;
                &--push{
                    margin-top: 64px;
                }
            }
            &__right{
                .title{
                    font-size: 36px;
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>