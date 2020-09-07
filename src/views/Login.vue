<template>
    <div class="q-pa-md window-height">
        <div class="row justify-center items-center fit">
            <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                <q-card>
                    <q-card-section>
                        <div class="text-h6 text-center">Entrar na sua conta</div>
                    </q-card-section>

                    <q-form @submit.prevent="submit">
                        <q-card-section>
                            <q-input v-model="usuario" class="q-pb-sm" label="Usuário" />
                            <q-input v-model="senha" type="password" label="Senha" />
                        </q-card-section>

                        <q-card-actions vertical>
                            <q-btn color="primary" type="submit">Entrar</q-btn>
                            <q-btn>Criar uma conta</q-btn>
                        </q-card-actions>
                    </q-form>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {

    private usuario: string = '';
    private senha: string = '';

    private mounted(): void {
        if (this.$q.localStorage.has('session')) {
            this.$router.push({ name: 'home' });
        }
    }

    private submit(): void {
        this.$q.loading.show();
        this.$service.login(this.usuario, this.senha).then(() => {
            this.$router.push({ name: 'home' });
        }).catch(error => {
            if (error.response) {
                const message = error.response.data['mensagem'];
                this.$q.notify({ color: 'negative', message });
            }
        }).finally(() => this.$q.loading.hide());
    }

}
</script>