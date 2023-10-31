import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue'
import PostDetail from '../views/PostDetail.vue'

const routes = [
    {
      path: '',
      name:'postlist',
      component:PostList
    },
    {  path: '/blog/:id',
       name: 'postdetail',
       component: PostDetail, 
    }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes
})
  
  
export default router