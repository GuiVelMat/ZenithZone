<template>
    <HeroSection />

    <MiddleSection />
    <Olympics />
    <GraphicSection />
    <ListDeportesHome />
</template>

<script>
import Olympics from '../../components/home/Olympics.vue';
import HeroSection from '../../components/home/HeroSection.vue';
import MiddleSection from '@/components/home/MiddleSection.vue';
import GraphicSection from '@/components/home/GraphicSection.vue';
import ListDeportesHome from '@/components/home/ListDeportesHome.vue';

export default {
    components: {
        HeroSection,
        MiddleSection,
        Olympics,
        GraphicSection,
        ListDeportesHome
    }
};
</script>

<style scoped>
body {
    margin-top: 87px;
    background-color: rgb(245, 245, 245);
    font-family: 'Roboto', sans-serif;
}
</style>