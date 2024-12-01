<script setup lang="ts">
    import { useRouter, RouterLink } from 'vue-router';

    // components
    import FooterMenu from './FooterMenu.vue';

    // fetch footer menu
    const router = useRouter();
    const menu = router.options.routes.filter(item => item.meta?.showFooter);
</script>

<template>
    <footer class="main-footer">
        <div class="wrapper">
            <div class="footer">

                <RouterLink class="footer__title" to="/">Alpha hotels</RouterLink>
            
                <div class="footer__navs">
                    <FooterMenu title="Om os">
                        <li v-for="item in menu" :key="item.path"><RouterLink :to="item.path">{{ item.name }}</RouterLink></li>
                    </FooterMenu>

                    <FooterMenu title="Kontakt">
                        <li><address>Slotsgade 26<br> DK-5000 Odense C</address></li>
                    </FooterMenu>

                    <FooterMenu title="Social">
                        <li>
                            <RouterLink to="/">Facebook</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Instagram</RouterLink>
                        </li>
                    </FooterMenu>
                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    .main-footer{
        background-color: $white;
        color: $secondary;
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .footer{
        display: flex;
        &__title{
            font-size: 26px;
            font-weight: bold;
            max-width: 220px;
            width: 100%;
        }
        &__navs{
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }
</style>