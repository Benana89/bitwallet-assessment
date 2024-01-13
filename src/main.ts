import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component:  () => import('./views/Home.vue') },
    { path: '/one', component: () => import('./views/QuestionOne.vue') },
    { path: '/two', component: () => import('./views/QuestionTwo.vue') },
    { path: '/three', component: () => import('./views/QuestionThree.vue') },
    { path: '/four', component: () => import('./views/QuestionFour.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
