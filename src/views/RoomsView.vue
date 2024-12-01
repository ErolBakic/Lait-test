<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    // Get route
    const route = useRoute();

    onMounted(async () => {
        // Set the title
        if (route.name) {
            document.title = route.name.toString();
        }
    });
</script>

<template>
    <div>

    </div>
</template>

<style lang="scss" scoped>

</style>