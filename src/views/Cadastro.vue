<template>
    <div class="q-pa-md window-height">
        <div class="row justify-center items-center fit">
            <q-stepper v-model="step" ref="stepper" color="primary" animated header-nav>
                <q-step :name="1" title="Informações do usuário" :done="step > 1" icon="mdi-pencil">
                    <div class="q-gutter-sm">
                        <q-input v-model="nome" label="Nome" />
                        <q-input v-model="email" type="email" label="E-Mail" />
                    </div>
                </q-step>

                <q-step
                    :name="2"
                    title="Criar um usuário e senha"
                    :done="step > 2"
                    icon="mdi-account"
                >
                    <div class="q-gutter-sm">
                        <q-input v-model="usuario" label="Usuário" />
                        <q-input v-model="senha" type="password" label="Senha" />
                    </div>
                </q-step>

                <q-step
                    :name="3"
                    title="Confirmação"
                    icon="mdi-check"
                >Informações preenchidas! Pressione 'Finalizar' para concluir seu cadastro</q-step>

                <template v-slot:navigation>
                    <q-stepper-navigation>
                        <q-btn
                            v-if="step !== 3"
                            class="fit"
                            color="primary"
                            @click="$refs.stepper.next()"
                        >Próximo</q-btn>
                        <q-btn
                            v-if="step === 3"
                            class="fit"
                            color="primary"
                            @click="cadastrar"
                        >Finalizar</q-btn>
                    </q-stepper-navigation>
                </template>
            </q-stepper>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Registro extends Vue {

    private step: number = 1;

    private nome: string = '';
    private email: string = '';
    private usuario: string = '';
    private senha: string = '';

    private cadastrar(): void {
        this.$q.loading.show();
        this.$service.cadastrar(this.usuario, this.senha, this.email, this.nome).then(() => {
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