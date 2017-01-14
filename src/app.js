const Vue = require('vue');
const store = require('./store');
const router = require('./router');
const { sync } = require('vuex-router-sync');

sync(store, router);


// Запуск приложения
new Vue(
  {
    router,
    store,
    render: (h) => h(Root)
  }
).$mount('#app');
