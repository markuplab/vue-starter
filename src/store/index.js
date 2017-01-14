const Vue = require('vue');
const Vuex = require('vuex');
const modules = require('./modules');

Vue.use(Vuex);

const store = new Vuex.Store({ modules });

module.exports = store;

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    store.hotUpdate({
      modules: require('./modules')
    });
  });
}
