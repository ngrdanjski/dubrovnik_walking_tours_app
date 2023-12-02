<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom" class="dwt-tab-bar">

        <ion-tab-button tab="homepage" href="/homepage">
          <ion-icon aria-hidden="true" :icon="eyeOutline" />
          <ion-label style="font-weight: 700; font-size: .8rem">Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="private-tours" href="/private-tours">
          <ion-icon aria-hidden="true" :icon="locateOutline" />
          <ion-label style="font-weight: 700; font-size: .8rem">Scheduled Tours</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="dubrovnik-guide" href="/dubrovnik-guide">
          <ion-icon aria-hidden="true" :icon="newspaperOutline" />
          <ion-label style="font-weight: 700; font-size: .8rem">Guide</ion-label>
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
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
