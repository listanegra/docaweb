<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-space />
                <q-btn icon="mdi-dots-vertical" flat dense>
                    <q-menu auto-close>
                        <q-list>
                            <q-item>
                                <q-item-section>
                                    <q-item-label v-text="nome" />
                                    <q-item-label caption v-text="email" />
                                </q-item-section>
                            </q-item>
                            <q-item clickable>
                                <q-item-section avatar>
                                    <q-icon name="mdi-exit-to-app" color="negative"></q-icon>
                                </q-item-section>
                                <q-item-section>Sair</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page>
                <q-list>
                    <template v-for="(user, i) in users">
                        <q-item :key="i">
                            <q-item clickable class="fit">
                                <q-item-section>
                                    <q-item-label v-text="user.nome" />
                                    <q-item-label caption v-text="user.email" />
                                </q-item-section>

                                <q-item-section side top>
                                    <q-item-label
                                        caption
                                    >{{ new Date(user.data_criacao).toLocaleDateString() }}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-item>
                    </template>
                </q-list>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { QTable } from 'quasar'
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
        this.$service.getUsers().then(users => {
            this.users = users;
        });
    }

}
</script>