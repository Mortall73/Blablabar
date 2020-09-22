<template>
  <label>
    <input type="radio"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      :checked="checked">
    {{label}}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class RadioButton extends Vue {

  @Prop({ default: '' })
  readonly label?: string

  @Prop({ default: '' })
  readonly name?: string

  @Prop({ default: '' })
  readonly id?: string

  @Prop({ default: '' })
  readonly value?: string

  @Prop({ default: false })
  readonly disabled?: boolean

  @Prop({ default: false })
  readonly required?: boolean

  @Prop({ default: false })
  readonly checked?: boolean
}
</script>

<style lang="scss">

</style>
