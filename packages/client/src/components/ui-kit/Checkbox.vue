<template>
  <div class="checkbox__wrap">
    <label class="checkbox">
      <input class="checkbox__hidden"
        :id="id"
        :name="name"
        type="checkbox"
        :value="value"
        :required="required"
        :disabled="disabled"
        :checked="checked"
      >
      <span class="checkbox__button">
        <div class="icon-check"></div> 
      </span>
    </label>
    <label class="checkbox__text"
      v-html="label"
      :for="id"
    ></label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class Checkbox extends Vue {

  @Prop({ default: '' })
  readonly id?: string

  @Prop({ default: '' })
  readonly name?: string

  @Prop({ default: '' })
  readonly label?: string

  @Prop({ default: '' })
  readonly value?: string

  @Prop({ default: false })
  readonly disabled?: Boolean

  @Prop({ default: false })
  readonly required?: Boolean

  @Prop({ default: false })
  readonly checked?: Boolean
}
</script>

<style lang="scss" scoped>

</style>
