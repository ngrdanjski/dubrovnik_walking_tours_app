<template>
  <ion-page style="margin-top: 0px">
    <ion-content :fullscreen="true">
      <div v-if="isToursIsLoaded">
        <ion-card v-for="tour in allTours" class="post-item">
          <router-link :to="'/dubrovnik-guide/'+ tour.slug">
            <ion-card-header class="post__header">
              <ion-card-title class="post__title">{{ tour.title }}</ion-card-title>
            </ion-card-header>
          </router-link>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { onMounted, ref } from "vue";

let tours = ref([])
let allTours = []
let isToursIsLoaded = false

onMounted(async () => {
  await axios
      .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/posts?isPublish=true')
      .then(response => {
        tours = response.data['hydra:member']
        allTours = tours
        setTimeout(() => {
          isToursIsLoaded = true
          console.log(allTours);
        }, 500)
      })
})
</script>

<style>
.post-item a {
  text-decoration: none;
}
</style>
