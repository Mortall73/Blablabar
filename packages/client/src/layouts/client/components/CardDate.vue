<template>
  <div class="card-date">
    <span class="card-date__day">{{day}}</span>
		<span class="card-date__month">{{month}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardDate extends Vue {

	@Prop({ default: ()=>{
		return {}
	}})
	readonly CardDate?: Object
	
data () {
		return {
				day: 21,
				month: 'May'
		}
	}
}
</script>

<style lang="scss" scoped>
.card-date {
	max-width: 40px;
	max-height: 50px;
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	&__day {
		color: black;
		font-size: 20px;
		font-weight: 600;
	}
	&__month {
		color: #ff5353;
		font-size: 12px;
		font-weight: 600;
	}
}
</style>