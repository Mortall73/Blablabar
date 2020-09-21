<template>
    <div>
        Auth
        <form @submit.prevent="uathenticate" enctype="multipart/form-data">
            <input type="text" name="email" v-model="email">
            <input type="password" name="password" v-model="password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import config from '../../../config';

import $http from '../../../utils/http';

@Component
export default class AuthPage extends Vue {
    private email: string = '';

    private password: string = '';

	async uathenticate() {
        const data = {
            email: this.email,
            password: this.password,
        };
        const result: Response = await $http.post(`${config.API_URL}/auth/login`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        console.log(result);
    }
}
</script>


<style lang="scss">

</style>