import axios from "axios";
import { createStore } from "vuex";

const infoWeather = createStore({
    state() {
        return {
            weather: {},
            api_key: "22bbed0d8981c8ce5296903b3d7eff63",
            location_url: "http://api.openweathermap.org/geo/1.0/direct",
            info_url: "https://api.openweathermap.org/data/2.5/weather"
        };
    },
    mutations: {
        setWeather(state, weatherPayload) {
            state.weather = weatherPayload;
        },
    },
    actions: {
        handle({ dispatch }, keyword) {
            Promise.all([
                dispatch('getLocation',keyword),
            ]).then(response => {
                dispatch('search', response[0][0]);
            })
        },

        search({ commit, state }, location) {
            new Promise((resolve, reject) => {
                axios.get(`${state.info_url}?lat=${location.lat}&lon=${location.lon}&appid=${state.api_key}`)
                .then(response => {
                    commit('setWeather', response.data);
                })
                .catch(error => {
                    reject(error);
                })
            })
        },

        getLocation({ state }, keyword) {
            return new Promise((resolve, reject) => {
                axios.get(`${state.location_url}?q=${keyword}&appid=${state.api_key}`)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error);
                })
            })
        },
    },
});

export default infoWeather;
