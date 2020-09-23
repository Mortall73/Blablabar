<template>
  <div class="card-meeting">
		<div class="card-meeting__organize">
			<v-user class="user--organize"/>
		</div>
		<div class="card-meeting__place-galery">
			<div class="card-meeting__place-photo-wrapper">
				<img class="card-meeting__place-photo" :src="src" alt="">
			</div>
			<!-- slider-->
		</div>
		<div class="card-meeting__info">
			<span class="card-meeting__name">{{MeetingName}}</span>
			<span class="card-meeting__date-creation">{{DateCreation}}</span>
			<div class="card-meeting__participants">
				<v-user class="user--participants"/>
				<v-user class="user--participants"/>
				<v-user class="user--participants"/>
			</div>
		</div>
		<div class="card-meeting__date">
			<v-card-date/>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import CardDate from '@/layouts/client/components/CardDate.vue';
import User from '@/layouts/client/components/User.vue';

@Component({
    components: {
				'v-card-date': CardDate,
				'v-user': User,
    }
})
export default class CardMeeting extends Vue {

@Prop({ default: ()=>{
		return {}
	}})
  readonly card?: Object

data () {
		return {
				id: 1,
				OrganizerName: 'Vadim',
				MeetingName: 'Тусич по барам Ульска',
				DateCreation: '23.09.2020',
				rating: '8',
				src: require('../../../../assets/images/bar.jpg')
		}
	}

}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.card-meeting{
	max-width: 320px;
	background-color: $cl-black-bg;
	border-radius: 20px;
	height: 400px;
	color: $color-text;
	position: relative;
	&__organize {
		padding: 20px 20px 10px 20px;
	}
	&__place-photo-wrapper {
		height: 150px;
		overflow: hidden;
	}
	&__place-photo {
		object-fit: cover;
	}
	&__place-galery {
		margin-bottom: 20px;
	}
	&__info {
		padding: 20px;
		display: flex;
		flex-direction: column;
	}
	&__name {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 5px;
	}
	&__date-creation {
		font-size: 13px;
		color: $color-text-light;
		margin-bottom: 20px;
	}
	&__date {
		position: absolute;
		top: 175px;
		left: 16px;
	}
	&__participants {
		display: flex;
	}
}
</style>