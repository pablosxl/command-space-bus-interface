<template>
    <v-container fluid>
        <v-form
            ref="form"
            v-model="valid">
            <div class="d-flex my-3" style="width: 100%">  
                <v-card-title>Onibus Spacial</v-card-title>
                <v-col
                    class="d-flex align-center"
                    cols="3"
                    sm="3">
                    <v-select
                        v-model="person"
                        :items="members"
                        label="tripulante"
                        :rules="rules" />
                </v-col>
                <v-btn
                    dark
                    class="ml-auto mr-3 my-3"
                    color="success"
                    @click="create()"
                    :loading="btnLoading" 
                    :disabled="!!mission.id">
                    Iniciar Missão
                </v-btn>
            </div>
        </v-form>
        <div v-if="mission.id">
            <mission-control
                ref="missioncontrol"
                :missionId="mission.id"
                :member="person || mission.memberId" 
                :origin="'Ônibus Espacial'" />
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
            members: [
                {value: 1, text: 'Axel'},
                {value: 2, text: 'Megan'},
                {value: 3, text: 'Jordan'},
                {value: 4, text: 'Asheley'},
            ],
            person: 1,
            rules: [
                value => !!value || "*Obrigatório selecionar o tripulante!"
            ],
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
            
            if (this.$refs.form.validate()) {
                try {
                    this.btnLoading = true;
                    let body = {
                        memberId: this.person,
                        origin: 'Ônibus Espacial',
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
            }
            
        },
    }
}
</script>