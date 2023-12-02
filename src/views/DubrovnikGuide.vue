<template>
  <ion-page style="margin-top: 0px">
    <ion-content :fullscreen="true">
      <div v-if="isPostsLoaded">
        <ion-card v-for="post in allPosts" class="post-item">
          <router-link :to="'/dubrovnik-guide/'+ post.slug">
            <ion-card-header class="post__header">
              <ion-card-title class="post__title">{{ post.title }}</ion-card-title>
            </ion-card-header>
          </router-link>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { onMounted, ref } from "vue";

let posts = ref([])
let allPosts = []
let isPostsLoaded = false

onMounted(async () => {
  await axios
      .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/posts?isPublish=true')
      .then(response => {
        posts = response.data['hydra:member']
        allPosts = posts
        setTimeout(() => {
          isPostsLoaded = true
          console.log(allPosts);
        }, 500)
  })
})
</script>

<style>
.post-item a {
  text-decoration: none;
}
</style>
