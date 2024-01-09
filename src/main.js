import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import components from '@/components/UI'

import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDE3TXy62W7-UGGuEhRYhB9MDKvMehkEr4",
    authDomain: "vue-midas.firebaseapp.com",
    projectId: "vue-midas",
    storageBucket: "vue-midas.appspot.com",
    messagingSenderId: "896408830001",
    appId: "1:896408830001:web:2a077e41acecff74a11510",
    measurementId: "G-518YNJ086J",
    databaseURL: "https://vue-midas-default-rtdb.firebaseio.com/"
})
// export const db = getDatabase(appFirebase);
const apps = createApp(App)
components.forEach(component => {
    apps.component(component.name, component)
})

let app
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = apps.use(store).use(router).use(messagePlugin).mount('#app')
    }
})

