import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ArticleForm from '@/components/ArticleForm'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/add_article', name: 'articleForm', component: ArticleForm },
    { path: '/user', name:'user', component: User }
  ]
})
