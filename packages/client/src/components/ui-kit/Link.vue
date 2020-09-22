<template>
  <a class="link"
    v-bind="$attrs"
    :is="tag"
    :to="to"
    :href="href"
    @click.prevent="onClick"
    >
    {{label}}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class Link extends Vue {
  @Prop({
    default: 'vue-link',
    validator (value: string): boolean {
      return !!value.match(/(a|nuxt-link|button)/)
    },
  })
  readonly tag!: string

  @Prop({ default: '' })
  readonly to?: string

  @Prop({ default: '' })
  readonly href?: string

  @Prop({ default: '' })
  readonly label?: string

  @Emit('click')
  onClick (e: any) {
    return e
  }
}
</script>

<style lang="scss">
  
</style>
