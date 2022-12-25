import axios from "axios";
import { createStore } from "vuex";

// Create a new stores instance.
const infoWeather = createStore({
    state() {
        return {
            weather: {},
            api_key: "22bbed0d8981c8ce5296903b3d7eff63",
            base_url: "https://api.openweathermap.org/data/2.5/weather",
        };
    },
    mutations: {
        setWeather(state, weatherPayload) {
            console.log(weatherPayload);
            state.weather = weatherPayload;
        },
    },
    actions: {
        async search({ commit, state }, keyword) {
            axios.get(`${state.base_url}?q=${keyword}&unit=metric&appid=${state.api_key}`)
                .then(function (response) {
                  // handle success
                  console.log(response);
                  commit('setWeather', response);
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                });
        },
    }
});

export default infoWeather;
