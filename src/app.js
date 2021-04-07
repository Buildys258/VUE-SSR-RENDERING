import Vue from 'vue'
import App from './App.vue'
export function creatApp() {
	const app = new Vue({
        render: h => h(App)
    })
    return { app }
}