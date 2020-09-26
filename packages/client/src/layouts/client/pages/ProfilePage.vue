<template>
	<div class="page-wrapper">
		<main class="profile">
			<div class="profile__content">
				<v-user class="user--profile"/>
				<div class="statistic">
					<div class="statistic__data">
						<span class="statistic__number">{{posts}}</span>
						<span class="statistic__label">Posts</span>
					</div>
					<div class="statistic__data">
						<span class="statistic__number">{{followers}}</span>
						<span class="statistic__label">Followers</span>
					</div>
					<div class="statistic__data">
						<span class="statistic__number">{{following}}</span>
						<span class="statistic__label">Following</span>
					</div>
					<v-button label='Message' class="button--mrg-l"/>
					<v-button label='Ico' class="button--bg"/>
				</div>
				<div class="profile__info">
					<h1 class="profile__name">{{name}}</h1>
					<h3 class="profile__location">{{city}}</h3>
					<div class="profile__about">
						<span class="profile__text">{{about}}</span>
						<v-tag-list :items="tags"/>
					</div>
				</div>
			</div>
		</main>
		<v-footer/>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Footer from '@/layouts/client/components/Footer.vue';
import User from '@/layouts/client/components/User.vue';
import TagList from '@/layouts/client/components/TagList.vue';
@Component({
    components: {
				'v-footer': Footer,
				'v-user': User,
				'v-tag-list': TagList,
    }
})
export default class ProfilePage extends Vue {

data () {
		return {
				posts: 100,
				followers: 250,
				following: 120,
				name: 'Vadim',
				city: 'Ульяновск',
				about: 'Немного о себе бла бла бла',
		}
	};
	private tags = [
		{
			tag: 'настойки'
		},
		{
			tag: 'Темный пивас'
		},
		{
			tag: 'Электронная мызыка'
		},
		{
			tag: 'шумные тусовки'
		}
		
	]
}
</script>

<style lang="scss">
@import '../../../styles/utils/_variables.scss';
.profile {
	background-color: $cl-black-bg;
	border-radius: 20px;
	padding: 16px;
	&__content {
		display: flex;
		flex-wrap: wrap;
	}
	&__name {
		margin: 0 0 5px 0;
		font-size: 20px;
	}
	&__location {
		margin: 0 0 10px 0;
		font-size: 14px;
		color: $color-text-light
	}
}
.statistic {
		display: inline-flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 70%;
		padding-top: 8px;
		margin-bottom: 20px;
		&__data {
		width: 33.3333%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 10px;
	}
	&__number {
		font-size: 16px;
		font-weight: 700;
	}
	&__label {
		font-size: 12px;
		color: $color-text-light;
	}
}
</style>