<template>
  <div class="container">
    <h1 class="text-center my-4">Post List</h1>
    <ul class="list-group">
      <li v-for="post in posts" :key="post.id" class="list-group-item">
        
          <div class="d-flex align-items-center">
            <div class="post-thumbnail me-3">
              <img :src="post.thumbnail" alt="Thumbnail" class="img-fluid" style="max-width: 100px; max-height: 100px;">
            </div>
            <div class="post-content">
              <h2 class="h4">{{ post.title }}</h2>
              <p class="mb-0">{{ post.summary }}</p>
              <router-link :to="'/blog/' + post.id" class="">more...</router-link>
            </div>
          </div>
     
      </li>
    </ul>
  </div>
</template>

  
<script>
import axios from 'axios'

export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      this.loadBlogPosts()
    },
    methods: {
      async loadBlogPosts() {
        try {
          const response = await axios.get('http://localhost:8000/api/blog/posts/')
          this.posts = response.data
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script>
  