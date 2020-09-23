<template>
  <label>
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :required="required"
      :disabled="disabled"
      @input="$emit('input', $event.target.value)">
    {{label}}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

  @Prop({ default: '' })
  readonly id?: string

  @Prop({ default: '' })
  readonly name?: string

  @Prop({ default: '' })
  readonly placeholder?: string

  @Prop({ default: '' })
  readonly type?: string

  @Prop({ default: '' })
  readonly value?: string

  @Prop({ default: false })
  readonly required?: boolean

  @Prop({ default: false })
  readonly disabled?: boolean

  @Prop({ default: '' })
  readonly label?: string
}
</script>

<style lang="scss">

</style>