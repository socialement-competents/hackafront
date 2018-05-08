// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import App from '@/App.vue'
import router from '@/app/router'

Vue.config.productionTip = false

const httpLink = new HttpLink({
<<<<<<< HEAD
  uri: `https://${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '3333'}/graphql`
=======
  uri: `https://${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '3333'}`
>>>>>>> 4771e008861b5426d6a84d05b38f5bd7a0f7fc18
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  router,
  template: '<App/>',
  components: { App }
})
