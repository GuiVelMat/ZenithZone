import Api from "../Api";
import secrets from "../../secrets";

export default {
    GetReservas() { // Obtiene todas las reservas de un usuario logeado
        return Api(secrets.URL_SPRING).get(`pistasReservadas`);
    },
    CreateReserva(data) {
        return Api(secrets.URL_SPRING).post(`reservaPista`, data);
    },
    DeleteReserva(data) {
        return Api(secrets.URL_SPRING).delete(`reservaPista`, data);
    },
}