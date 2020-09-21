<template>
  <input class="text-input"
    :type="type"
    v-bind="$attrs"
    @input="$emit('update', $event.target.value)"
		v-on="$listeners"
		>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  inheritAttrs: false,
})
export default class TextInput extends Vue {
  @Prop({
    default: 'text',
    validator (value: string): boolean {
      return [
        'email',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'url',
      ].includes(value)
    },
  })
  readonly type!: string
}
</script>

<style lang="scss" scoped>

</style>
