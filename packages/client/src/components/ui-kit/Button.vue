<template>
  <button 
		:is="tag" 
		:class="className"
		@click="$emit('click')">
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

  @Prop({
    default: 'default',
    validator (value: string): boolean {
      return !!value.match(/(default)/)
    },
  })
  readonly skin!: string

  private get className (): string {
    return `button button_skin-${this.skin}`
  }
}
</script>

<style lang="scss">

</style>
