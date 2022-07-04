const helloWorld = {
    data() {
        return {
            message: "¡Hola!"
        }
    }
}
Vue.createApp(helloWorld).mount('#app')


const byeWorld = {
    data() {
        return {
            message: "¡Adios!"
        }
    }
}
Vue.createApp(byeWorld).mount('#app-2')