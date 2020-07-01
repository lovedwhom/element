import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const contextRouer = require.context('./modules',true,/\.js$/);

let children =contextRouer
    .keys()
    .reduce((arr,item)=>arr.concat(contextRouer(item).default.routes),[])

  console.log(children)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...children

]

 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export  {router,routes}
