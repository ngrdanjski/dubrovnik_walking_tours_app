<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Back To List</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div v-if="isPostLoaded">
        <h1>{{ post.title }}</h1>
        <img v-if="post.featuredImage"
            :alt="post.title"
            :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + post.featuredImage" />
        <img v-else
             :alt="post.title"
             style="object-fit: cover;"
             src="/images/no-image.jpg" />
        <div v-html="post.content"></div>
      </div>
      <div v-else style="height: 100%; display: flex; align-items: center; justify-content: center;">
        <ion-spinner></ion-spinner>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage, IonSpinner,
} from '@ionic/vue';import {onMounted} from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'

const route = useRoute()
const post = {
  title: null,
  content: null,
  featuredImage: null,
};
let isPostLoaded = false

onMounted(async () => {
  await axios
      .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/posts?slug=' + route.params.slug)
      .then(({data}) => {
        const responsePost = data['hydra:member'][0]

        post.title = responsePost.title
        post.content = responsePost.content
        post.featuredImage = responsePost.featuredImage

        isPostLoaded = true

        console.log('responsePost', responsePost)
      })
})
</script>
