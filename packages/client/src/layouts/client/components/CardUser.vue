<template>
  <div class="card-user">
		<div class="card-user__bg-wrapper">
			<img :src="bg" alt="" class="card-user__bg">
		</div>
		<div class="card-user__photo-wrapper">
			<img :src="photo" alt="" class="card-user__photo">
		</div>
		<div class="card-user__info">
			<span class="card-user__name">{{name}}</span>
			<span class="card-user__statistic">{{statisctic}} Тусовочек</span>
		</div>
		<div class="card-user__action">
			<v-button label='Follow' class="button"/>
			<v-button label='icon' class="button--bg"/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardUser extends Vue {

	data () {
		return {
				name: 'Vadim',
				statisctic: 12,
				photo: require('../../../../assets/images/profile.jpg'),
				bg: require('../../../../assets/images/bg.jpg')
		}
	}

}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.card-user {
	max-width: 320px;
	width: 100%;
	max-height: 340px;
	background-color: $cl-black-bg;
	border-radius: 20px;
	box-sizing: border-box;
	overflow: hidden;
	position: relative;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&__bg-wrapper {
		position: absolute;
		width: 100%;
		height: 130px;
		right: 0;
		top: 0;
		background-color: red;
	}
		&__bg {
		object-fit: cover;
	}
	&__photo-wrapper {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 20px;
		z-index: 1;
	}
	&__photo {
		object-fit: cover;
	}
	&__info {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 25px;
	}
	&__name {
		font-size: 22px;
		margin-bottom: 5px;
		font-weight: 700;
	}
	&__follow {
		margin-right: 5px;
	}
}
</style>