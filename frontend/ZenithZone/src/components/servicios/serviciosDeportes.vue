<template>
    <div class="container mb-5">
        <div class="row g-4 justify-content-center">
            <!-- <CardDeportes v-for="deporte in state.deportes" :key="deporte.id" :deporte="deporte" class="col-md-3" /> -->
            <CardDeportesHome v-for="deporte in state.deportes" :key="deporte.id" :deporte="deporte" class="col-md-3" />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import CardDeportes from '../shared/CardDeportes.vue';
import { computed, reactive } from 'vue';
import Constant from '@/Constant';
import CardDeportesHome from '../home/CardDeportesHome.vue';

export default {
    components: {
        CardDeportesHome
    },
    setup() {
        const store = useStore();

        store.dispatch(`deportes/${Constant.INITIALIZE_DEPORTE}`);

        const state = reactive({
            deportes: computed(() => store.getters['deportes/GetDeportes'])
        });

        return { state };
    }
};
</script>