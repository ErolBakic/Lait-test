<script setup lang="ts">
    import { defineProps } from 'vue';
    import { useRouter, RouterLink } from 'vue-router';

    // Type
    import type { Header } from '@/types/Header';

    // fetch menu
    const router = useRouter();
    const menu = router.options.routes.filter(item => item.meta?.showHeader);

    // Props
    const props = defineProps<Header>()

</script>

<template>
    <div class="main-header" :style="{ backgroundImage: `url(${props.bgImage})` || '' }">
        <header class="wrapper header">
            <div class="header__logo">
                <RouterLink to="/">Alpha hotels</RouterLink>
            </div>
            
            <nav>
                <ul class="header__nav">
                    <li v-for="item in menu" :key="item.name">
                        <RouterLink :to="item.path" :class="{ active: router.currentRoute.value.path === item.path }">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
        
        <div class="main-hero">
            <div class="wrapper">
                <div class="hero">
                    <slot class="hero"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-header{
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #443e33;
        background-blend-mode: overlay;
        padding-top: 50px;
        padding-bottom: 100px;
    }
    .header{
        min-height: 200px;
        display: flex;
        justify-content: space-between;
        &__logo{
            color: $white;
        }
        &__nav{
            display: flex;
            > li{
                margin-left: 40px;
                text-transform: uppercase;
                color: $white;
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: $secondary;
                    transition: width 0.3s;
                }
                &:hover{
                    &::after{
                        width: 100%;
                    }
                }
                .active{
                    color: $secondary;
                    font-weight: bold;
                    pointer-events: none;
                    cursor: default;
                    &::after{
                        content: none;
                    }
                }
            }
        }
    }
    .hero{
        max-width: 700px;
        margin-left: 100px;
        color: $white;
    }
</style>