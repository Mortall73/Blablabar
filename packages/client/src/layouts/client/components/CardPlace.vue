<template>
  <div class="card-place">
    <div class="card-place__content"
			:style="{backgroundImage: `url(${bg})`}"
			>
      <span class="card-place__name">{{name}}</span>
			<hr class="card-place__hr">
      <span class="card-place__rating">Оценки {{rating}}/10</span>
      <span class="card-place__price">Средняя цена {{price}}руб.</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardPlace extends Vue {

data () {
		return {
				name: 'HARAT`S',
				rating: '7',
				price: '1000',
				bg: require('../../../../assets/images/bar.jpg')
		}
	}

}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.card-place {
	width: 100%;
	max-width: 320px;
  height: 220px;
  border-radius: 16px;
	position: relative;
	padding: 8px;
	background-color: $cl-black-bg;
	&__content {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		background-position: center;
		background-size: cover;
		padding: 130px 20px 20px 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}
	&__name {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	&__hr {
		width: 100%;
		border-color: $cl-gray;
		height: 1px;
		border-radius: 1px;
		margin: 0;
		margin-bottom: 5px;
	}
	&__rating {
		margin-bottom: 5px;
	}
}
</style>