<template>
  <ion-page style="margin-top: 15px">
    <ion-content :fullscreen="true">
      <div class="ion-padding-horizontal">
        <h1 style="font-weight: 800; font-size: 1.8rem; margin: 0">Discover the best of <span style="color: #B82226;">Dubrovnik</span> on a walking tour <span style="color: #B82226;"> with a local expert guide</span></h1>
      </div>
      <div v-if="isToursIsLoaded">
        <swiper :slides-per-view="1.2">
          <swiper-slide v-for="tour in allTours">
            <router-link :to="'/tours/'+ tour.slug">
              <ion-card class="tour-item" :class="{'inactive': !tour.isActive }">
                <img :alt="tour.title" :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + tour.featuredImage" />
                <ion-card-header class="tour-item__header">
                  <ion-card-title class="tour-item__title">{{ tour.title.substring(0, 28) }}</ion-card-title>
                  <ion-card-subtitle class="tour-item__subtitle">{{ tour.duration }}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content class="tour-item__content">{{ tour?.shortDescription.substring(0, 64)+"..." }}</ion-card-content>
                <div class="tour-item__price-wrapper">{{ tour?.price }}€</div>
              </ion-card>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>

      <div class="ion-padding">
        <div class="section section--left">
          <div class="section__title"><span class="section__title-red">7 days</span><br/>a week</div>
          <div class="section__description">We operate 7 days a week All tours start by the Big Onofrio's Fountain</div>
          <img class="section__img" src="/images/homepage-red-umbrella.jpeg" alt="Red Umbrella">
        </div>
        <div class="section section--right">
          <div class="section__title"><span class="section__title-red">How to</span><br/>join us</div>
          <div class="section__description">Look for the red umbrella <br> with our sign</div>
          <img class="section__img" src="/images/homepage-map.png" alt="Map">
        </div>
      </div>

      <div>
        <h2 style="margin-left: 15px; margin-bottom: 0; font-weight: 600; font-size: 1.6rem">Latest from our blog</h2>
        <div v-if="isPostsLoaded">
          <swiper :slides-per-view="1.4" :space-between="-20" :loop="true" :centered-slides="true">
            <swiper-slide v-for="post in allPosts">
              <ion-card class="post-item-list">
                <router-link :to="'/dubrovnik-guide/'+ post.slug">
                  <img v-if="post.featuredImage"
                      :alt="post.title"
                       style="height: 240px; object-fit: cover;"
                      :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + post.featuredImage" />
                  <img v-else
                       :alt="post.title"
                       style="height: 240px; object-fit: cover;"
                       src="/images/no-image.jpg" />
                  <ion-card-content class="post-item-list__content">
                    <h2 class="post-item-list__subtitle">{{ post?.category?.title ? post?.category?.title : 'Undefined' }}</h2>
                    <ion-card-title class="post-item-list__title">{{ post.title }}</ion-card-title>
                  </ion-card-content>
                </router-link>
              </ion-card>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { IonPage, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { onMounted } from "vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/vue';

let allTours = []
let isToursIsLoaded = false

let allPosts = []
let isPostsLoaded = false

onMounted(async () => {
  console.log('Homepages')
  await axios
    .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/tours?isPublish=true')
    .then(response => {
      allTours = response.data['hydra:member']
      isToursIsLoaded = true
  })

  await axios
    .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/posts?isPublish=true')
    .then(response => {
      allPosts = response.data['hydra:member']
      isPostsLoaded = true
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

.post-item-list {
  text-align: left;
}
.post-item-list__header {}
.post-item-list__content {
  padding: 15px;
  padding-top: 5px;
}
.post-item-list__title {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
}
.post-item-list__subtitle {
  margin-bottom: 5px !important;
  display: block;
  padding: 4px 8px;
  background-color: #B82226;
  color: #ffffff;
  width: fit-content;
  font-weight: 300;
  font-size: .8rem !important;
}

.tour-item__price-wrapper {
  padding: 10px 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #B82226;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 800;
}
</style>
