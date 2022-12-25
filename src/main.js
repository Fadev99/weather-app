import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import axios from 'axios';
import infoWeather from '/stores/infoWeather'

const app = createApp(App);

app.use(Antd).use(axios).use(infoWeather).mount('#app');
