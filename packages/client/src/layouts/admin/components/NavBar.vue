<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <router-link :to="{ name: 'admin' }" class="navigation__link">
                    Home
                </router-link>
            </li>
            <li class="navigation__item">
                <router-link :to="{ name: 'posts' }" class="navigation__link">
                    Posts
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
	
}
</script>

<style lang="scss" scoped>
    .navigation {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 250px;
        box-shadow: 2px 0 5px #efefef;
    }
</style>