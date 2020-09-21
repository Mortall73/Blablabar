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
.checkbox__wrap {
  display: flex;
}
.checkbox {
  cursor: pointer;
  display: inline-block;
  margin-right: 24px;

  &__hidden {
    padding: 0px;
    margin-right:-13px;
    visibility: hidden;
  }
  &__button {
    display: inline-flex;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 1px solid $cl-ncs;
    align-items: center;
    justify-content: center;
  }
  &__text {
    font-family: $font-open-semibold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    cursor: pointer;
  }
  &:hover .checkbox__button {
    border-color: $cl-light-blue;
  }

  &__question {
    margin-bottom: 15px;
    width: 100%;
    &:last-child {
      margin-right: 0;
    }
  }
} 
  .icon-check {
        visibility: hidden;
        color: $cl-white;
        font-size: 7px;
  }
  .checkbox__hidden:checked+.checkbox__button {
      background-color: $cl-light-blue;
      border-color: $cl-light-blue;
      .icon-check {
        visibility: visible;
  }
}
</style>
