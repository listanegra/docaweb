<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-space />
                <q-btn icon="mdi-dots-vertical" flat dense>
                    <q-menu auto-close>
                        <q-list>
                            <q-item>
                                <q-item-section v-text="nome" />
                            </q-item>
                            <q-item>
                                <q-item-section v-text="email" class="text-caption" />
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container></q-page-container>
    </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { User } from '@/modules/api-service'

@Component
export default class Home extends Vue {

    private nome: string = '';
    private email: string = '';

    private users: User[] = [];

    private mounted(): void {
        this.$service.getMe().then(user => {
            this.nome = user.nome;
            this.email = user.email;
        });
    }

}
</script>