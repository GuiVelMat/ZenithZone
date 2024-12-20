import Constant from '../../../Constant';
import adminDashboardService from '../../../services/dashboards/adminDashboard.service';

export const adminDashboard = {
    namespaced: true,

    state: {
        deportes: [],
        pistas: []
    },

    mutations: {
        [Constant.INITIALIZE_DEPORTE](state, payload) {
            if (payload) {
                state.deportes = payload;
            }
        },
        [Constant.INITIALIZE_PISTA](state, payload) {
            if (payload) {
                state.pistas = payload;
            }
        },
        [Constant.CREATE_ONE_DEPORTE](state, newDeporte) {
            state.deportes.push(newDeporte); 
          },
          // Crear una pista
          [Constant.CREATE_ONE_PISTA](state, newPista) {
            state.pistas.push(newPista); 
          },
          [Constant.SET_CURRENT_PISTA](state, pista) {
            state.currentPista = pista; 
        },
        [Constant.SET_CURRENT_DEPORTE](state, pista) {
            state.currentPista = pista; 
        },
        [Constant.DELETE_ONE_DEPORTE](state, deporteslug) {
            state.deportes = state.deportes.filter(deporte => deporte.slug !== deporteslug);
        },
        [Constant.DELETE_ONE_PISTA](state, pistaslug) {
            state.pistas = state.pistas.filter(pista => pista.slug !== pistaslug);
        },
    },

    actions: {
        async [Constant.INITIALIZE_DEPORTE](store) {
            try {
                const { data } = await adminDashboardService.GetDeportes();
                store.commit(Constant.INITIALIZE_DEPORTE, data.data);
            } catch (error) {
                console.error("Error al cargar los deportes:", error);
            }
        },
        
        async [Constant.INITIALIZE_PISTA](store) {
            try {
                const { data } = await adminDashboardService.GetPistas();
                store.commit(Constant.INITIALIZE_PISTA, data.data);
            } catch (error) {
                console.error("Error al cargar las pistas:", error);
            }
        },
    
    async [Constant.CREATE_ONE_DEPORTE]({ commit }, newDeporte) {
        try {
          const { data } = await adminDashboardService.CreateDeporte(newDeporte);
          commit(Constant.CREATE_ONE_DEPORTE, data.data); // Agregar el deporte creado
        } catch (error) {
          console.error("Error al crear el deporte:", error);
        }
      },
  
      // Crear una pista
      async [Constant.CREATE_ONE_PISTA]({ commit }, newPista) {
        try {
          const { data } = await adminDashboardService.CreatePista(newPista);
          commit(Constant.CREATE_ONE_PISTA, data.data); 
        } catch (error) {
          console.error("Error al crear la pista:", error);
        }
      },
        async [Constant.FETCH_PISTA_BY_SLUG]({ commit }, slug) {
            try {
                console.log("fetched");
                const { data } = await adminDashboardService.GetPistaBySlug(slug); 
                console.log("data"+JSON.stringify(data.data));
                commit(Constant.SET_CURRENT_PISTA, data.data); 
                return data.data;
            } catch (error) {
                console.error("Error al cargar la pista:", error);
            }
        },
        async [Constant.UPDATE_ONE_PISTA]({ commit }, { slug, data }) {
            try {
                const { data: updatedData } = await adminDashboardService.UpdatePista(slug, data);
                commit(Constant.SET_CURRENT_PISTA, updatedData);
                return updatedData;
            } catch (error) {
                console.error("Error al actualizar la pista:", error);
            }
        },
        async [Constant.FETCH_DEPORTE_BY_SLUG]({ commit }, slug) {
            try {
                console.log("fetched");
                const { data } = await adminDashboardService.GetDeporteBySlug(slug); 
                console.log("data"+JSON.stringify(data.data));
                commit(Constant.SET_CURRENT_DEPORTE, data.data); 
                return data.data;
            } catch (error) {
                console.error("Error al cargar la pista:", error);
            }
        },
        
        async [Constant.UPDATE_ONE_DEPORTE]({ commit }, { slug, data }) {
            try {
                const { data: updatedData } = await adminDashboardService.UpdateDeporte(slug, data);
                commit(Constant.SET_CURRENT_DEPORTE, updatedData);
                return updatedData;
            } catch (error) {
                console.error("Error al actualizar el deporte:", error);
            }
        },
        async [Constant.DELETE_ONE_DEPORTE]({ commit }, deporteslug) {
            try {
              await adminDashboardService.DeleteDeporte(deporteslug);
              commit(Constant.DELETE_ONE_DEPORTE, deporteslug);
            } catch (error) {
              console.error("Error al eliminar el deporte:", error);
            }
          },
          async [Constant.DELETE_ONE_PISTA]({ commit }, pistaslug) {
            try {
              await adminDashboardService.DeletePista   (pistaslug);
              commit(Constant.DELETE_ONE_PISTA, pistaslug);
            } catch (error) {
              console.error("Error al eliminar la pista:", error);
            }
          },
    },

    getters: {
        GetDeportes(state) {
            return state.deportes;
        },
        GetPistas(state) {
            return state.pistas;
        },
        GetCurrentPista(state) {
            return state.currentPista; 
          },
        GetCurrentDeporte(state){
            return state.currentDeporte;
        }
    }
};