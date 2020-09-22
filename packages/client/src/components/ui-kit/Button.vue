<template>
  <button 
    :is="tag" 
    @click="$emit('click')"
    >
      {{label}}
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({
    default: 'button',
    validator (value: string): boolean {
      return !!value.match(/(button|a|nuxt-link|div)/)
    },
  })
  readonly tag!: string

  @Prop({ default: '' })
  readonly label?: string

}
</script>

<style lang="scss">

</style>
