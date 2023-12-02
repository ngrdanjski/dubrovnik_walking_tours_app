<template>
  <ion-page style="margin-top: 15px">
    <ion-content :fullscreen="true">
      <div class="ion-padding-horizontal">
        <h1 style="font-weight: 800; font-size: 1.8rem; margin: 0">Discover the best of <span style="color: #B82226;">Dubrovnik</span> on a walking tour <span style="color: #B82226;"> with a local expert guide</span></h1>
      </div>
      <div v-if="isToursIsLoaded">
        <swiper :slides-per-view="1.1">
          <swiper-slide v-for="tour in allTours">
            <router-link :to="'/tours/'+ tour.slug">
              <ion-card class="tour-item" :class="{'inactive': !tour.isActive }">
                <img alt="Silhouette of mountains" :src="'https://127.0.0.1:8002/uploads/' + tour.featuredImage" />
                <ion-card-header class="tour-item__header">
                  <ion-card-title class="tour-item__title">{{ tour.title }}</ion-card-title>
                  <ion-card-subtitle class="tour-item__subtitle">{{ tour.duration }}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content class="tour-item__content">{{ tour?.shortDescription }}</ion-card-content>
              </ion-card>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>

      <div class="ion-padding-horizontal">
        <div class="section section--left">
          <div class="section__title"><span class="section__title-red">7 days</span><br/>a week</div>
          <div class="section__description">We operate 7 days a week All tours start by the Big Onofrio's Fountain</div>
          <img class="section__img" src="" alt="">
        </div>
        <div class="section section--right">
          <div class="section__title"><span class="section__title-red">How to</span><br/>join us</div>
          <div class="section__description">Look for the red umbrella <br> with our sign</div>
          <img class="section__img" src="" alt="">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { onMounted, ref } from "vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/vue';

let tours = ref([])
let allTours = []
let isToursIsLoaded = false

onMounted(async () => {
  console.log('Homepages')
  await axios
    .get('https://127.0.0.1:8002/api/v1/tours?isPublish=true')
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
.inactive {
  opacity: 0.2;
  pointer-events: none;
}
.swiper-slide a {
  text-decoration: none;
}
.section {
  margin-bottom: 60px;
}
.section--left {
  text-align: left;
}
.section--right {
  text-align: right;
}
.section__title {
  font-size: 2rem;
  font-weight: 700;
  line-height: 90%;
}
.section__title-red {
  color: #B82226;
}
.section__description {
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 130%;
}
.section__img {}
</style>
