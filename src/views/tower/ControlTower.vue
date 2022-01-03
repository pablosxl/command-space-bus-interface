<template>
    <v-container fluid>
        <div class="d-flex my-3" style="width: 100%">
            <v-card-title>Torre de Controle</v-card-title>
            <v-btn
                dark
                class="ml-auto mr-3 my-3"
                color="success"
                @click="openDialog"
                :disabled="!!mission.id">
                Iniciar Missão
            </v-btn>
        </div>
        <div v-if="mission.id">
            <mission-control
                ref="missioncontrol"
                :missionId="mission.id"
                :member="5" 
                :origin="'Torre de Controle'" />
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import MissionControl from '../../components/mission/MissionControl.vue';
import MissionService from '../../services/MissionService';

const missionService = new MissionService();

export default {
    components: {
        "mission-control": MissionControl 
    },
    data() {
        return {
            missionId: undefined,
            valid: true,
            btnLoading: false
        }
    },
    computed: {
        ...mapState('mission',['mission'])
    },
    methods: {
        ...mapActions('mission', ['setMission']),
        async create() {
            
            try {
                this.btnLoading = true;
                let body = {
                    origin: 'Torre de Controle',
                    situation: 'Iniciado',
                    command: 'Iniciar Missão!',
                    active: true
                };

                const response = await missionService.create(body);

                this.missionId = response.data.id;

                this.setMission(response.data);
            } catch (error) {
                
            } finally {
                this.btnLoading = false;
            }
        },
    }
}
</script>