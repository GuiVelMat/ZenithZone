import secrets from "../../secrets"
import Api from "../Api"

export default {
    GetPistas() {
        return Api(secrets.URL_SPRING).get('pistas');
    },

    GetOnePista(slug) {
        return Api(secrets.URL_SPRING).get(`pistas/${slug}`);
    },

    GetPistasByDeporte(slug) {
        // console.log(`deportes/${slug}/pistas`);
        return Api(secrets.URL_SPRING).get(`deportes/${slug}/pistas`);
    },

    GetPistasInfinite(offset, limit) {
        return Api(secrets.URL_SPRING).get(`pistasInfinite?offset=${offset}&limit=${limit}`);
    }
}