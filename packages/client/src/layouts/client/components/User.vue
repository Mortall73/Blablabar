<template>
  <div class="user">
		<div class="user__photo-wrapper">
			<img :src="src" alt="" class="user__photo">
		</div>
		<div class="user__info">
			<span class="user__name">{{name}}</span>
			<span class="user__last-visit">{{data}}</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class User extends Vue {
	
data () {
		return {
				name:'Vadim',
				src: require('../../../../assets/images/profile.jpg'),
				data: '12.08.2020'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.user {
	display: flex;
	flex-direction: column;
	align-items: center;
	&__photo-wrapper {
		width: 55px;
		height: 55px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 10px;
	}
	&__name {
		display: inline-block;
		width: 100%;
	}
	&__last-visit {
		display: none;
		color: $color-text-light;
		font-size: 12px;
	}
	&--organize {
		flex-direction: row;
		.user__photo-wrapper {
			margin-bottom: 0;
			margin-right: 10px;
			width: 40px;
			height: 40px;
		}
		.user__last-visit {
			display: inline-block;
		}
	}
	&--participants {
		margin-right: -5px;
		.user__photo-wrapper {
			width: 35px;
			height: 35px;
			margin-bottom: 0;
		}
		.user__last-visit {
			display: none;
		}
		.user__name {
			display: none;
		}
	}
}
</style>