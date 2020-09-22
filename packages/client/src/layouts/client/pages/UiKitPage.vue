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
        <v-button/>
        <v-button/>
        <v-button/>
      </div>
      <div class="block__item">
        <p class="block__title">LINKS</p>
        <v-link label="link"/>
      </div>
      <div class="block__item">
        <p class="block__title">CHECKBOX/RADIOBUTTON</p>
      </div>
      <div class="block__item">
        <p class="block__title">INPUT</p>
      </div>
      <div class="block__item">
        <p class="block__title">TEXTAREA</p>
      </div>
      <div class="block__item">
        <p class="block__title">CARDS</p>
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

import Link from '../../../components/ui-kit/Link.vue';
import Input from '../../../components/ui-kit/Input.vue';
import Button from '../../../components/ui-kit/Button.vue';
import RadioButton from '../../../components/ui-kit/RadioButton.vue';
import Checkbox from '../../../components/ui-kit/Checkbox.vue';

@Component({
    components: {
        'v-link': Link,
        'v-button': Button,
        'v-input': Input,
        'v-radio-button': RadioButton,
        'v-checkbox': Checkbox,
    }
})

export default class UiKitPage extends Vue {

}
</script>


<style lang="scss">
  .block {
    margin: 0 auto;
    width: 1100px;
    &__item {
      margin-bottom: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__title {
      font-size: 32px;
      text-align: center;
      width: 100%;
    }
  }
</style>