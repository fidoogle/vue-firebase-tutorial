// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyBwwiEwlssW10QYQxngt2XBe8jep6D49xc",
  authDomain: "vue-firebase-tutorial-11969.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-11969.firebaseio.com",
  projectId: "vue-firebase-tutorial-11969",
  storageBucket: "",
  messagingSenderId: "1017993985314"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
