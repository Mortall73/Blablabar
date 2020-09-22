<template>
  <div class="radio-btn__wrap">
    <label class="radio-btn">
      <input class="radio-btn__hidden"
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :disabled="disabled"
        :required="required"
        :checked="checked"
			>
      <span calss="radio-btn__button"></span>
		</label>
    <label class="radio-btn__text"
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
