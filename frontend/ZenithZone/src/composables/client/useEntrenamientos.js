import { ref, reactive, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import entrenamientosService from '@/services/client/entrenamientos.service';

export function useEntrenamientos() {
    const route = useRoute();
    const router = useRouter();

    let filters_url = {
        nombre: "",
        dia: "",
        duracionMin: 0,
        duracionMax: 0,
        maxPlazasMin: 0,
        maxPlazasMax: 0,
        precioMin: 0,
        precioMax: 0,
        deporteId: "",
        offset: 0,
        limit: 4,
        diasSeleccionados: [],
    };

    const state = reactive({
        entrenamientos: [],
        offset: filters_url.offset,
        filters: filters_url,
        totalPages: 0,
        meta: {},
    });

    const fetchEntrenamientos = (filters) => {
        entrenamientosService.GetEntrenamientos(filters)
            .then(res => { state.entrenamientos = res.data.entrenamientos; })
            .catch(err => console.log(err));
    };

    const fetchTotalPages = (filters, filters_limit) => {
        entrenamientosService.GetEntrenamientosTotalFiltered(filters)
            .then(res => {
                const limit = filters_limit ?? 4;
                const { entrenamientosCount } = res.data;
                const pages = Math.ceil(entrenamientosCount / limit);
                state.totalPages = pages;
            })
            .catch(error => console.error(error));
    };

    const fetchEntrenamientosData = () => {
        entrenamientosService.GetEntrenamientosData()
            .then(res => { state.meta = res.data; })
            .catch(error => console.error(error));
    };

    const ApplyFilters = (filters) => {
        const filters_64 = btoa(JSON.stringify(filters));
        router.push({ name: 'serviciosEntrenamientosFilter', params: { filters: filters_64 } });
        fetchEntrenamientos(filters);
        fetchTotalPages(filters, filters.limit);
    };

    const resetFilters = () => {
        state.filters = {
            nombre: "",
            dia: "",
            duracionMin: 0,
            duracionMax: 0,
            maxPlazasMin: 0,
            maxPlazasMax: 0,
            precioMin: 0,
            precioMax: 0,
            deporteId: "",
            offset: 0,
            limit: 4,
            diasSeleccionados: [],
        };
        router.push({ name: 'serviciosEntrenamientos' });
        fetchEntrenamientos(state.filters);
        fetchTotalPages(state.filters, state.filters.limit);
    };

    const clickCallback = (pageNum) => {
        try {
            if (route.params.filters !== '') {
                filters_url = JSON.parse(atob(route.params.filters));
            }
        } catch (error) {
            console.log(error);
        }
        filters_url.offset = pageNum - 1;
        state.offset = pageNum;
        ApplyFilters(filters_url);
    };

    // Watch for filter changes
    watch(
        () => state.filters,
        (newFilters) => {
            ApplyFilters(newFilters);
        },
        { deep: true }
    );

    // Initial fetch
    onMounted(() => {
        if (route.params.filters) {
            const filters = JSON.parse(atob(route.params.filters));
            state.filters = filters;
            console.log(filters);
            ApplyFilters(filters);
            fetchTotalPages(filters, filters.limit);
        } else {
            fetchEntrenamientos(filters_url);
            fetchTotalPages(filters_url, filters_url.limit);
        }
        fetchEntrenamientosData();
    });

    return { state, filters_url, ApplyFilters, resetFilters, clickCallback };
}