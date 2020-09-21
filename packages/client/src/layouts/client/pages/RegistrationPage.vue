<template>
    <div>
        Registration
        <form @submit.prevent="registration" enctype="multipart/form-data">
            <input type="text" name="email" v-model="email">
            <input type="text" name="name" v-model="name">
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
export default class RegistrationPage extends Vue {
    private email: string = '';

    private name: string = '';

    private password: string = '';

	async registration() {
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
        };
        const result: Response = await $http.post(`${config.API_URL}/users`, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    }
}
</script>


<style lang="scss">

</style>