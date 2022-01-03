<template>
    <div :disabled="true">
        <h2> Missão {{ missionId }}</h2>
        <br/>
        Status : {{ mission.situation }} 
        <br/>
        Comando: {{ mission.command }}
        <v-card-title>Estágio 1 - Espaço</v-card-title>
        <div class="d-flex justify-center">
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="uncoupleSpaceBus()"
                :loading="btnLoading1">
                Desacoplar da ISS
            </v-btn>
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="init()"
                :loading="btnLoading2">
                Iniciar viagem
            </v-btn>
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="activateThrusters()"
                :loading="btnLoading3">
                Ativar propursores
            </v-btn>
        </div>
        <v-card-title>Estágio 2 - Terra</v-card-title>
        <div class="d-flex justify-center">
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="startEngines()"
                :loading="btnLoading4">
                Ligar Motores
            </v-btn>
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="openLandingGear()"
                :loading="btnLoading5">
                Abrir trem de pouso
            </v-btn>
            <v-btn
                dark
                class="mx-3"
                color="amber darken-4"
                @click="initLandingProcedure()"
                :loading="btnLoading6">
                Iniciar procedimento de pouso
            </v-btn>
        </div>
        <div class="d-flex ml-auto my-3">
            <v-btn
                dark
                class="ml-auto mr-3 my-3"
                color="red"
                @click="finish()"
                :loading="btnLoading7">
                Finalizar missão
            </v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import MissionService from '../../services/MissionService';

const missionService = new MissionService();

export default {
    props: {
        origin: {
            type: String,
            required: true
        },
        member: {
            type: Number,
            required: true
        },
        missionId: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            btnLoading1: false,
            btnLoading2: false,
            btnLoading3: false,
            btnLoading4: false,
            btnLoading5: false,
            btnLoading6: false,
            btnLoading7: false,
            missionData: {}
        }
    },

    computed: {
        ...mapState('mission',['mission'])
    },

    methods: {
        ...mapActions('mission',['setMission']),
        async uncoupleSpaceBus() {
            try {
                this.btnLoading1 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };
                this.verifyStage(2);
                const response = await missionService.uncoupleSpaceBus(this.missionId, body);

                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading1 = false;
            }
        },
        async init() {
            
            try {
                this.btnLoading2 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };

                this.verifyStage(3);
                const response = await missionService.init(this.missionId, body);
                
                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading2 = false;
            }
        },
        async activateThrusters() {
            try {
                this.btnLoading3 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };
                this.verifyStage(4);
                const response = await missionService.activateThrusters(this.missionId, body);

                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading3 = false;
            }
        },
        async startEngines() {
            try {
                this.btnLoading4 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };

                this.verifyStage(5);
                const response = await missionService.startEngines(this.missionId, body);
                
                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading4 = false;
            }
        },
        async openLandingGear() {
            try {
                this.btnLoading5 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };

                this.verifyStage(6);
                const response = await missionService.openLandingGear(this.missionId, body);

                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading5 = false;
            }
        },
        async initLandingProcedure() {
            try {
                this.btnLoading6 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };
                
                this.verifyStage(7);
                const response = await missionService.initLandingProcedure(this.missionId, body);

                this.missionData = response.data;
                this.setMission(response.data);
                this.$notify({
                    type: "success",
                    title: "Comando executado com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading6 = false;
            }
        },
        async finish() {
            try {
                this.btnLoading7 = true;
                let body = {
                    memberId: this.member,
                    origin: this.origin
                };

                this.verifyStage(8);
                const response = await missionService.finish(this.missionId, body);

                this.missionData = response.data;
                this.setMission({});
                this.$notify({
                    type: "success",
                    title: "Missão concluída com sucesso!"
                })
            } catch (error) {
                this.$notify({
                    type: "error",
                    title: `Erro ao executar o comando!`,
                    text: error.message
                });
            } finally {
                this.btnLoading7 = false;
            }
        },

        verifyStage(stageId) {
            
            if(this.mission.stage != (stageId-1))
                throw Error('Estágio inválido'); 
        }
    }
}
</script>