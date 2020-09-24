<template>
    <div class="page">
        Client
        <router-link :to="{name: 'registration'}">Registration</router-link>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';


@Component
export default class ClientLayout extends Vue {
	
}
</script>


<style lang="scss">
  .page {
		width: 100%;
	}
</style>