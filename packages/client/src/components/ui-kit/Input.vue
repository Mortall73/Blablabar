<template>
  <div class="input__wrap">
    <label class="input__label" v-html="label">
    <input class="input"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :required="required"
      :disabled="disabled"
      :active="active"
      :accept="accept"
      :class="{ 'disabled': disabled === true}"
      @input="$emit('input', $event.target.value)"
    >
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class Input extends Vue {

  @Prop({ default: '' })
  readonly id?: string

  @Prop({ default: '' })
  readonly name?: string

  @Prop({ default: '' })
  readonly label?: string

  @Prop({ default: '' })
  readonly placeholder?: string

  @Prop({ default: '' })
  readonly type?: string

  @Prop({ default: '' })
  readonly value?: string

  @Prop({ default: false })
  readonly disabled?: Boolean

  @Prop({ default: false })
  readonly active?: Boolean

  @Prop({ default: false })
  readonly required?: Boolean

  @Prop({ default: '' })
  readonly accept?: string
}
</script>

<style lang="scss">

</style>