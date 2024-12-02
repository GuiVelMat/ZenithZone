<template>
    <div class="container">
        <div class="row align-items-center">
            <!-- Select para Deporte -->
            <div class="col-2">
                <select class="form-select" v-model="state.filters.deporteId">
                    <option value="" disabled selected>Deporte</option>
                    <option v-for="deporte in state.deportes" :key="deporte.id" :value="deporte.id">
                        {{ deporte.nombre }}
                    </option>
                </select>
            </div>

            <!-- Search -->
            <div class="col-4">
                <Search :filters="state.filters" @search="sendFilters"/>
            </div>

            <!-- Rango de Precios -->
            <div class="col-3">
                <label class="mb-2">Precio máximo</label>
                <div class="d-flex flex-column">
                    <div class="d-flex row align-items-center">
                        <input 
                            type="range" 
                            class="form-range me-5" 
                            :min="minPrice" 
                            :max="maxPrice" 
                            step="5"
                            v-model="state.filters.precioMax" 
                        />
                        <span>{{ state.filters.precioMax }}€</span>
                    </div>
                </div>
            </div>

            <!-- Rango de Duración -->
            <div class="col-3">
                <label class="mb-2">Duración máxima</label>
                <div class="d-flex flex-column">
                    <div class="d-flex row align-items-center">
                        <input 
                            type="range" 
                            class="form-range me-3" 
                            :min="minDuracion" 
                            :max="maxDuracion" 
                            step="5"
                            v-model="state.filters.duracionMax" 
                        />
                        <span>{{ state.filters.duracionMax }} minutos</span>
                    </div>
                </div>
            </div>

            <!-- Select para Día -->
            <div class="col-12 mt-3">
                <div class="wrapper-dias" role="group" aria-label="Basic checkbox toggle button group">
                    <label v-for="(dia, index) in diasDeLaSemana" :key="index" class="btn" :class="{ active: state.filters.diasSeleccionados.includes(dia) }">
                        <input type="checkbox" class="btn-dia btn-check" :value="dia" v-model="state.filters.diasSeleccionados" autocomplete="off">
                        {{ dia }}
                    </label>
                </div>
            </div>
        </div>

        <!-- Botones -->
        <div class="container_filter mt-3 text-center mb-3">
            <button class="btn-clear" @click="deleteFilters()">Borrar Filtros</button>
        </div>
    </div>
</template>

<script>
import Constant from '../../Constant';
import { useStore } from 'vuex';
import { reactive, getCurrentInstance, computed, watch } from 'vue';
import Search from './Search.vue';

export default {
    components: {
        Search
    },
    props: {
        filters: Object,
        meta: Object
    },
    emits: ['filters', 'deleteFilters'],
    setup(props) {
        const store = useStore();
        const { emit } = getCurrentInstance();

        const diasDeLaSemana = [
            "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
        ];

        store.dispatch(`deportes/${Constant.INITIALIZE_DEPORTE}`);

        const state = reactive({
            deportes: computed(() => store.getters['deportes/GetDeportes']),
            filters: { 
                ...props.filters,
                precioMin: props.meta?.precioMinimo || 0,
                precioMax: props.meta?.precioMaximo || 100,
                duracionMax: props.meta?.duracionMaxima || 100,  // Asignar duracionMaxima como duracionMax
                duracionMin: props.meta?.duracionMinima || 0,  // Asignar duracionMinima como duracionMin
                diasSeleccionados: []
            },
            meta: computed(() => props.meta)
        });

        // Reactividad para sincronizar meta y filtros
        watch(
            () => props.meta,
            (newMeta) => {
                if (newMeta) {
                    state.filters.precioMin = newMeta.precioMinimo;
                    state.filters.precioMax = newMeta.precioMaximo;
                    state.filters.duracionMin = newMeta.duracionMinima; // Cambiar duracionMaxima a duracionMinima
                    state.filters.duracionMax = newMeta.duracionMaxima; // Cambiar duracionMinima a duracionMaxima
                }
            },
            { immediate: true }
        );

        // Computados para minPrice, maxPrice, minDuracion y maxDuracion
        const minPrice = computed(() => state.meta.precioMinimo || 0);
        const maxPrice = computed(() => state.meta.precioMaximo || 100);
        const minDuracion = computed(() => state.meta.duracionMinima || 0); // Duración mínima
        const maxDuracion = computed(() => state.meta.duracionMaxima || 100); // Duración máxima

        watch(
            () => state.filters,
            (newFilters) => {
                emit('filters', newFilters);
            },
            { deep: true }
        );

        const sendFilters = () => {
            emit('filters', state.filters);
        };

        const deleteFilters = () => {
            state.filters = {
                nombre: "",
                dia: "",
                duracionMin: minDuracion.value,
                duracionMax: maxDuracion.value,
                maxPlazasMin: 0,
                maxPlazasMax: 0,
                precioMin: minPrice.value,
                precioMax: maxPrice.value,
                deporteId: "",
                offset: 0,
                limit: 4,
                diasSeleccionados: []
            };
            emit('deleteFilters', state.filters);
        };

        const updateSearch = (search) => {
            state.filters.nombre = search;
        };

        return { state, sendFilters, deleteFilters, updateSearch, diasDeLaSemana, minPrice, maxPrice, minDuracion, maxDuracion };
    }
};
</script>

<style>
select {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

input[type="range"] {
    width: 100%;
    margin: 10px 0;
    height: 5px;
    background: #ddd;
    /* border-radius: 5px; */
}

input[type="range"]::-webkit-slider-runnable-track {
    background: #ddd;
}

input[type="range"]::-webkit-slider-thumb {
    background: #ff6600;
    /* border: 2px solid #000000; */
}

.btn-filter {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #28a745;
    background-color: #28a745;
    color: white;
    cursor: pointer;
}

.btn-filter:hover {
    background-color: #218838;
    border-color: #1e7e34;
}

.btn-clear {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid #dc3545;
    background-color: #dc3545;
    color: white;
    cursor: pointer;
}

.btn-clear:hover {
    background-color: #c82333;
    border-color: #bd2130;
}

.wrapper-dias .btn {
    margin: 0 2px;
    background-color: white;
    border: 1px solid #ff6600;
    color: #ff6600;
}
.wrapper-dias .btn-dia:checked + .btn {
    background-color: #ff6600; /* Cambia el color del botón cuando está seleccionado */
    color: #fff;
}
.wrapper-dias .btn.active {
    background-color: #ff6600; /* Cambia el color del botón cuando está seleccionado */
    color: #fff;
}
</style>