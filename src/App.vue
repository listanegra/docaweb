<template>
    <router-view />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {

    private mounted(): void {
        this.$service.validar().catch(() => {
            this.$q.localStorage.remove('session');
            if (this.$route.name !== 'login')
                this.$router.push({ name: 'login' });
        });
    }

}
</script>