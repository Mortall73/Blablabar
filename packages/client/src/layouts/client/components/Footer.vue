<template>
  <footer class="footer">
		<nav class="footer__nav">
			<router-link class="link" :to="{name: '/'}">icon1</router-link>
			<router-link class="link" :to="{name: '/'}">icon2</router-link>
			<router-link class="link" :to="{name: '/'}">icon3</router-link>
			<router-link class="link" :to="{name: '/'}">icon4</router-link>
		</nav>
	</footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
	
}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.footer {
	position: fixed;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 70px;
	background-color: $cl-black-bg;
	display: flex;
	align-items: center;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	&__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 20px;
	}
}
</style>