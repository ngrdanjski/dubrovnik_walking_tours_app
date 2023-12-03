<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="dwt-tab-bar">

        <ion-tab-button tab="homepage" href="/homepage">
          <ion-label style="font-weight: 700; font-size: .9rem">Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="private-tours" href="/private-tours">
          <ion-label style="font-weight: 700; font-size: .9rem">Private Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="dubrovnik-guide" href="/dubrovnik-guide">
          <ion-label style="font-weight: 700; font-size: .9rem">Guide</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="contact" href="/contact">
          <ion-label style="font-weight: 700; font-size: .9rem">Contact</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet,  } from '@ionic/vue';
</script>

<style>
.dwt-tab-bar {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
