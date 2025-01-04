import Api from "../Api";
import secrets from "../../secrets";

export default {
    GetEntrenadores() {
        return Api(secrets.URL_SPRING).get(`entrenadores`);
    },
    Profile(numeroentrenador) {
        return Api(secrets.URL_SPRING, 'false').get(`entrenador/${numeroentrenador}`);
    },
    GetCurrentEntrenador() {
        return Api(secrets.URL_SPRING, 'false').get('currentEntrenador');
    },
    UpdateEntrenador(data) {
        return Api(secrets.URL_SPRING, 'false').put('currentEntrenador', data);
    },

}