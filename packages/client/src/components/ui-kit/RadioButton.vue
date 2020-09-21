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
.radio-btn__wrap {
  display: flex;

}
.radio-btn {
  cursor: pointer;
  display: inline-block;
  margin-right: 24px;
  position: relative;

  &__hidden {
    padding: 0px;
    position: absolute;
    margin-right:-15px;
    visibility: hidden;
  }
  &__button {
    display: inline-flex;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid $cl-ncs;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }
  &__text {
    font-family: $font-open-semibold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    cursor: pointer;
  }
  &:hover .radio-btn__button {
    border-color: $cl-read;
  }
}
</style>
