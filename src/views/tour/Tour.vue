<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Back to Tours</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div v-if="isTourIsLoaded">
        <div class="tour">
          <swiper :slides-per-view="1.00">
            <swiper-slide>
              <img
                  class="tour__img"
                  :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + singleTour.featuredImage"
                  alt=""
              />
            </swiper-slide>
            <swiper-slide v-for="galleryItem in singleTour.mediaGallery">
              <img
                  class="tour__img"
                  :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + galleryItem.src"
                  alt=""
              />
            </swiper-slide>

            <ion-icon
                v-if="singleTour.mediaGallery.length > 0"
                class="slider-icon"
                aria-hidden="true"
                :icon="swapHorizontalOutline"
                slot="start"></ion-icon>

          </swiper>
          <div class="ion-padding">
            <div class="tour__duration" style="padding: 0; margin: 0">
              <ion-icon class="tour__star" v-for="index in singleTour.rating" aria-hidden="true" :icon="starSharp" slot="start"></ion-icon>
            </div>
            <h1 class="tour__title" style="padding: 0; margin: 0">{{ singleTour.fullTitle ? singleTour.fullTitle : singleTour.title }}</h1>
            <div class="meta-list">
              <div class="meta-list__item">
                <span class="meta-list__item-title"><strong>Duration: {{ singleTour.duration }}</strong></span>
              </div>
              <div class="meta-list__item">
                <span class="meta-list__item-title"><strong>Departure: </strong></span>
                <div class="meta-list__item-departure">
                  <div class="meta-list__item-departure-item">
                    <div>Daily at 10:00 | <span>MAY 1 - SEP 30</span></div>
                  </div>
                  <div class="meta-list__item-departure-item">
                    <div>Daily at 12:00 | <span>APR 1 - OCT 31</span></div>
                  </div>
                  <div class="meta-list__item-departure-item">
                    <div>Daily at 12:00 | <span>APR 1 - OCT 31</span></div>
                  </div>
                </div>
              </div>
              <div class="meta-list__item">
                <span class="meta-list__item-title"><strong>Price: </strong> {{ singleTour.price }} €</span>
              </div>
            </div>
            <div class="hr"></div>
            <div class="tour__description" v-html="singleTour.description"></div>
          </div>
        </div>
        <ion-grid class="testimonials ion-padding-vertical">
          <ion-row class="ion-text-center">
            <ion-col>
              <img src="/images/ta-small.png" alt="">
            </ion-col>
          </ion-row>
          <ion-row class="ion-text-center">
            <ion-col>
              <swiper :slides-per-view="1">
                <swiper-slide v-for="testimonial in allTestimonials">
                  <div class="testimonial-item">
                    <h3 class="testimonial-item__title"> {{ testimonial.title }}</h3>
                    <div class="testimonial-item__author">{{ testimonial.author }}</div>
                  </div>
                </swiper-slide>
              </swiper>
            </ion-col>
          </ion-row>
        </ion-grid>

        <div class="related-tours" style="margin-bottom: 90px !important;">
          <swiper :slides-per-view="1.1">
            <swiper-slide v-for="tour in relatedTours">
              <router-link :to="'/tours/'+ tour.slug">
                <ion-card class="tour-item" :class="{'inactive': !tour.isActive }">
                  <img alt="Silhouette of mountains" :src="'https://phpstack-675879-4120349.cloudwaysapps.com/uploads/' + tour.featuredImage" />
                  <ion-card-header class="tour-item__header">
                    <ion-card-title class="tour-item__title">{{ tour.title.substring(0, 28) }}</ion-card-title>
                    <ion-card-subtitle class="tour-item__subtitle">{{ tour.duration }}</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content class="tour-item__content">{{ tour?.shortDescription.substring(0, 64)+"..." }}</ion-card-content>
                </ion-card>
              </router-link>
            </swiper-slide>
          </swiper>

        </div>
        <div class="bottom-actions">
          <ion-button id="open-modal" expand="block" >Book Now for <strong style="margin-left: 5px">{{ singleTour.price }}€</strong></ion-button>
        </div>
        <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button @click="cancel()">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Book Tour</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your First Name"
                  label-placement="stacked"
                  ref="input"
                  type="text"
                  placeholder="Your First Name"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your Last Name"
                  label-placement="stacked"
                  ref="input"
                  type="text"
                  placeholder="Your Last Name"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your E-mail"
                  label-placement="stacked"
                  ref="input"
                  type="email"
                  placeholder="Your E-mail"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your Phone"
                  label-placement="stacked"
                  ref="input"
                  type="number"
                  placeholder="Your Phone"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your Address"
                  label-placement="stacked"
                  ref="input"
                  type="number"
                  placeholder="Your Address"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your City"
                  label-placement="stacked"
                  ref="input"
                  type="text"
                  placeholder="Your City"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your ZIP code"
                  label-placement="stacked"
                  ref="input"
                  type="text"
                  placeholder="Your ZIP code"
              ></ion-input>
            </ion-item>
            <ion-item class="ion-margin-bottom">
              <ion-input
                  label="Enter your Country"
                  label-placement="stacked"
                  ref="input"
                  type="text"
                  placeholder="Your Country"
              ></ion-input>
            </ion-item>
            <ion-button expand="block">Next Step</ion-button>
          </ion-content>
        </ion-modal>
      </div>
      <div v-else style="height: 100%; display: flex; align-items: center; justify-content: center;">
        <ion-spinner></ion-spinner>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButton,
  IonModal,
  IonItem,
  IonInput,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonIcon,
  IonSpinner,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue';
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
const route = useRoute()
import { OverlayEventDetail } from '@ionic/core/components';
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { swapHorizontalOutline, starSharp } from 'ionicons/icons';

let isTourIsLoaded = false
const singleTour = {
  title: null,
  fullTitle: null,
  featuredImage: null,
  mediaGallery: null,
  shortDescription: null,
  description: null,
  duration: null,
  price: null,
  departure: null,
  rating: null,
  ratingText: null,
};


const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');

const modal = ref();
const input = ref();

const cancel = () => modal.value.$el.dismiss(null, 'cancel');

const confirm = () => {
  const name = input.value.$el.value;
  modal.value.$el.dismiss(name, 'confirm');
};

const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
  if (ev.detail.role === 'confirm') {
    message.value = `Hello, ${ev.detail.data}!`;
  }
};

let relatedTours  = []
let allTestimonials = []
let isTestimonialsLoaded = false

onMounted(async () => {
  await axios
      .get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/tours?slug=' + route.params.slug)
      .then(({data}) => {
        const responseTour = data['hydra:member'][0]
        singleTour.title = responseTour.title
        singleTour.fullTitle = responseTour.fullTitle
        singleTour.featuredImage = responseTour.featuredImage
        singleTour.mediaGallery = responseTour.mediaGallery
        singleTour.shortDescription = responseTour.shortDescription
        singleTour.description = responseTour.description
        singleTour.duration = responseTour.duration
        singleTour.price = responseTour.price
        singleTour.departure = responseTour.departure
        singleTour.rating = responseTour.rating
        singleTour.ratingText = responseTour.ratingText

        isTourIsLoaded = true

        responseTour.relatedTours.forEach((tour) => {
          axios.get('https://phpstack-675879-4120349.cloudwaysapps.com' + tour)
              .then(function ({data}) {
                relatedTours.push(data)
              })
        })
      })

  axios.get('https://phpstack-675879-4120349.cloudwaysapps.com/api/v1/testimonials')
      .then(function ({data}) {
        allTestimonials = data['hydra:member']
        isTestimonialsLoaded = true
      })
      .catch(function (error) {console.log(error);})
      .finally(function () {});
})
</script>

<style>
.bottom-actions {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px;
  background-color: #ffffff;
  width: 100%;
  color: #000000;
  z-index: 90;
}
.tour {}
.tour__img {
  height: 290px !important;
  object-fit: cover;
}
.tour__duration {
  margin-bottom: 10px !important;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
}
.tour__star {
  color: #B82226;
}
.tour__duration-value {
  margin-left: 5px;
}
.tour__description {
//padding-bottom: 90px;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 140%;
}
.tour__title {
  margin-bottom: 15px !important;
  font-size: 2rem;
  font-weight: 800;
  line-height: 100%;
}
.tour__book-now-button {
}
.tour__subtitle {}
.related-tours {
//padding-bottom: 15px;
}
.tour__list {
  margin: 0;
  padding: 0;
}
.slider-icon {
  padding: 6px;
  border-radius: 4px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 90;
  font-size: 1.4rem;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.60);
}
.meta-list {
  margin-bottom: 15px;
}
.meta-list__item {
  margin-bottom: 0px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.2rem;
  flex-direction: column;
}
.meta-list__item-icon {
  font-size: 1.6rem;
  font-weight: 600;
}
.meta-list__item-title {
  margin-bottom: 5px;
}
.meta-list__item-departure {
  font-size: 1rem;
  margin-left: 0px;
}
.meta-list__item-departure-item {
  margin-bottom: 5px;
}
.hr {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 1px;
  background-color: rgba(13, 13, 13, 0.30);
}
.testimonials {
  padding-top: 45px;
  padding-bottom: 30px;
}
</style>
