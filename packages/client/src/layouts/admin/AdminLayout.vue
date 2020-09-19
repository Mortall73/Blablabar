<template>
    <div class="page">
        <header></header>
        <NavBar />
        <router-view class="dynamic-page"></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import NavBar from './components/NavBar.vue';

@Component({
    components: {
        NavBar
    }
})
export default class AdminLayout extends Vue {
	private msg: string = 'Test';
}
</script>


<style lang="scss">
    .dynamic-page {
        height: 100%;
        min-height: 100vh;
        position: relative;
        margin-left: 250px;
        box-sizing: border-box;
        padding: 10px;
    }
</style>