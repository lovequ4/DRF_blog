<template>
    <div class="container" style="margin-top: 2%;">
      <div class="post-detail">
        <h1 class="text-center">{{ post.title }}</h1>
        <div class="d-flex justify-content-center">
          <img :src="post.image" alt="image" class="img-fluid" style="max-width: 300px; max-height: 300px;">
        </div>
        <div class="text-center">
          {{ post.content }}
        </div>
      </div>
    </div>
  </template>
  
<script>
import axios from 'axios'

export default {
    data() {
      return {
        post: {} 
      }
    },
    mounted() {
        this.loadBlogPosts(this.$route.params.id)
    },
    methods: {
      async loadBlogPosts(id) {
        try {
          const response = await axios.get(`http://localhost:8000/api/blog/posts/${id}`)
          this.post = response.data
          console.log(response.data)
        } catch (error) {
          console.error(error)
        }
      }
    }
}
</script>
  