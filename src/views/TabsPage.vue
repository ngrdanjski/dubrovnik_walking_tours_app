<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="dwt-tab-bar">

        <ion-tab-button tab="tab1" href="/">
          <ion-icon aria-hidden="true" :icon="eyeOutline" />
          <ion-label>Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/private-tours">
          <ion-icon aria-hidden="true" :icon="locateOutline" />
          <ion-label>Scheduled Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/dubrovnik-guide">
          <ion-icon aria-hidden="true" :icon="newspaperOutline" />
          <ion-label>Dubrovnik guide</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet,  } from '@ionic/vue';
import { eyeOutline, newspaperOutline, locateOutline } from 'ionicons/icons';
</script>

<style>
.dwt-tab-bar {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
