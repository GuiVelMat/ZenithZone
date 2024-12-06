import secrets from "../../secrets";
import Api from "../api";

export default {
    FormatFilters(params) {
        let params_ = [];
        Object.entries(params).forEach(([key, value]) => {
            if (key === 'nombre') {
                if (value !== "") {
                    params_.push(`${key}=${value}`);
                }
            } else if (key === 'diasSeleccionados') {
                // Include each selected day as a separate 'dia' parameter
                value.forEach(dia => {
                    params_.push(`dia=${dia}`);
                });
            } else if (key.endsWith('Min') || key.endsWith('Max')) {
                if (value > 0) {
                    params_.push(`${key}=${value}`);
                }
            } else if (key === 'deporteId') {
                if (value > 0) {
                    params_.push(`${key}=${value}`);
                }
            } else {
                params_.push(`${key}=${value}`);
            }
        });
        return params_.join('&');
    },

    GetAllEntrenamientos() {
        return Api(secrets.URL_SPRING).get(`entrenamientos`);
    },

    GetEntrenamientos(params) {
        return Api(secrets.URL_SPRING).get(`entrenamientos?${this.FormatFilters(params)}`);
    },

    GetEntrenamientosData() {
        return Api(secrets.URL_SPRING).get(`entrenamientos/data`);
    },

    GetEntrenamientosTotalFiltered(params) {
        return Api(secrets.URL_SPRING).get(`entrenamientos/totalNoPaginacion?${this.FormatFilters(params)}`);
    }
}