<template>
  <div>
    <div class="block">
      <div class="block__item">
        <p class="block__title">TITLES</p>
        <h1 class="title title--h1">Title h1</h1>
        <h2 class="title title--h2">Title h2</h2>
        <h3 class="title title--h3">Title h3</h3>
        <h4 class="title title--h4">Title h4</h4>
      </div>
      <div class="block__item">
        <p class="block__title">BUTTONS</p>
        <v-button label="Button"/>
        <v-button label="Button"/>
        <v-button label="Button"/>
      </div>
      <div class="block__item">
        <p class="block__title">LINKS</p>
        <router-link :to="{name: 'registration'}" class="link">Link</router-link>
        <router-link :to="{name: 'registration'}" class="link">Link</router-link>
        <router-link :to="{name: 'registration'}" class="link">Link</router-link>
      </div>
      <div class="block__item">
        <p class="block__title">CHECKBOX/RADIOBUTTON</p>
        <v-radio-button label="radio" name="q"/>
        <v-radio-button label="radio" name="q" :checked="true"/>
        <v-radio-button label="radio" name="q" :disabled="true"/>
        <v-checkbox label="checkbox" name="q"/>
        <v-checkbox label="checkbox" name="q" :checked="true"/>
        <v-checkbox label="checkbox" name="q" :disabled="true"/>
      </div>
      <div class="block__item black">
        <p class="block__title">INPUT</p>
        <v-input placeholder="bla bla"/>
        <v-input type="search" placeholder="bla bla"/>
        <v-input type ="number" placeholder="bla bla"/>
        <v-input placeholder="bla bla" :disabled="true"/>
      </div>
      <div class="block__item">
        <p class="block__title">TEXTAREA</p>
        <v-textarea/>
      </div>
      <div class="block__item">
        <p class="block__title">CARDS</p>
        <v-card-place v-for="card in cards" :key="card.id"/>
				<v-card-meeting/>
				<v-card-date/>
				<v-card-user/>
				<v-user/>
      </div>
      <div class="block__item">
        <p class="block__title">SELECT</p>
      </div>
      <div class="block__item">
        <p class="block__title">POPUP</p>
      </div>
      <div class="block__item">
        <p class="block__title">ASIDE-MENU</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CardPlace from '@/layouts/client/components/CardPlace.vue';
import CardMeeting from '@/layouts/client/components/CardMeeting.vue';
import CardDate from '@/layouts/client/components/CardDate.vue';
import CardUser from '@/layouts/client/components/CardUser.vue';
import User from '@/layouts/client/components/User.vue';
@Component({
    components: {
				'v-card-place': CardPlace,
				'v-card-meeting': CardMeeting,
				'v-card-date': CardDate,
				'v-card-user': CardUser,
				'v-user': User,
    }
})

export default class UiKitPage extends Vue {
  private cards = [
    {
			name: 'bla bla',
			id: 1,
    }
  ]
}
</script>


<style lang="scss">
@import '../../../styles/utils/_variables.scss';
  .block {
    margin: 0 auto;
    width: 1100px;
    &__item {
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
			justify-content: space-around;
			padding-bottom: 50px;
    }
    &__title {
      font-size: 32px;
      text-align: center;
      width: 100%;
		}
		.black {
			background-color: $cl-black-bg;
		}
  }
</style>