<template>
  <div class="card-place">
    <div class="card-place__photo">
      <img :src="card.src">
    </div>
    <div class="card-place__info">
      <span class="card-place__name">{{card.name}}</span>
      <span class="card-place__rating">{{card.rating}}/10</span>
      <span class="card-place__price">{{card.price}}руб.</span>
      <a :href="card.link" target="_blank" class="card-place__link">(icon)</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPlace',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.card-place {
  width: 200px;
  height: 300px;
  border: 1px solid gray;
  border-radius: 10px;

}
.card-place__photo {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
}
.card-place__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>