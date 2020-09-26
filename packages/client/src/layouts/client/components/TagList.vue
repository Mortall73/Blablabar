<template>
  <ul class="tag-list">
    <li class="tag-list__item" v-for="(item,index) in items" :key="index">{{item.tag}}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TagList extends Vue {
	
	@Prop({ default: () => [] }) readonly items?: object[]
}
</script>

<style lang="scss" scoped>
@import '../../../styles/utils/_variables.scss';
.tag-list {
	background-color: $cl-black-bg;
	display: flex; 
	flex-wrap: wrap;
	padding: 0;
	width: 100%;
	border-radius: 16px;
	&__item {
		list-style: none;
		background-color: $color-background;
		margin: 0 10px 10px 0;
		padding: 5px 10px 5px 10px;
		border-radius: 16px;
		position: relative;
	}
}
</style> 