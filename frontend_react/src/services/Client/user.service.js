import Api from "../Api";
import secrets from "../../secrets";

export default {
    // USER
    Register(data) {
        return Api(secrets.URL_SPRING).post('users', data);
    },

    Login(data) {
        return Api(secrets.URL_SPRING).post('users/login', data);
    },

    UpdateUser() {
        return Api(secrets.URL_SPRING).put('user');
    },

    CurrentUserProfile() {
        return Api(secrets.URL_SPRING).get('user');
    },

    GetCurrentUser() {
        return Api(secrets.URL_SPRING).get('user');
    },

    Refresh(refreshToken) {
        return Api(secrets.URL_SPRING).post(`refresh`, refreshToken);
    },

    BlacklistToken(refreshToken) {
        return Api(secrets.URL_SPRING).post(`logout`, refreshToken);
    },

    // ADMIN
    GetCurrentAdmin() {
        return Api(secrets.URL_SPRING, 'false').get('currentAdmin',);
    },

}//export