import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBK7zxQhIM4BhZ5O8nVmmj_uSzSdSClnSg',
  authDomain: 'vue-firebase-a428c.firebaseapp.com',
  databaseURL: 'https://vue-firebase-a428c.firebaseio.com',
  projectId: 'vue-firebase-a428c',
  storageBucket: 'vue-firebase-a428c.appspot.com',
  messagingSenderId: '423027474784',
  appId: '1:423027474784:web:af4ae413937c98c3e61e05',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app')
  }
})
