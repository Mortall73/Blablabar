<template>
	<div class="app stretch-container">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

import "./styles/main.scss";

export default class App extends Vue {
	private msg: string = 'Test';
}
</script>

<style lang="scss" scoped>
	.stretch-container {
		height: 100%;
		width: 100%;
		max-width: 100vw;
		min-height: 100vh;
		overflow: hidden;
	}
</style>