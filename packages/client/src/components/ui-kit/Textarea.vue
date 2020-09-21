<template>
  <div class="textarea__wrap">
    <label class="textarea__label">{{ label }}
    <textarea class="textarea" 
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      :required="required"
      :disabled="disabled"
      :active="active"
      @input="$emit('input', $event.target.value)"
      ></textarea>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class Textarea extends Vue {
  
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
}
</script>

<style lang="scss">

</style>
