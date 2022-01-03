<template>
    <v-container fluid>
        <div class="d-flex my-3" style="width: 100%">
            <v-card-title>Missões</v-card-title>
        </div>
        <div>
            <data-table
                :headers="headers"
                :items="missions"
                :item-key="'id'"
                :loading="loading"
                class="elevation-1">
                <template v-slot:default="mission">
                    <data-table-dropdown 
                        :item="mission"
                        :list-item="item" />
                </template>
            </data-table>
            <worker-options-dialog />
            <options-dialog />
        </div>
        <mission-history-dialog
            :key="missionId" 
            :missionId="missionId"
            :dialog="dialog"
            @closeDialog="dialog=false" />
    </v-container>
</template>

<script>

import DataTable from '@/components/utils/DataTable';
import DataTableDropDown from '@/components/utils/DataTableDropDown';

import { mapState, mapActions } from 'vuex';
import  MissionService  from '@/services/MissionService';
import RouteMixin from '@/mixins/commons/RouteMixin';
import MissionHistoryDialog from '../../components/mission/MissionHistoryDialog.vue'

const missionService = new MissionService();

export default {
    mixins: [RouteMixin],
    components: {
        "data-table" : DataTable,
        "data-table-dropdown": DataTableDropDown,
        "mission-history-dialog": MissionHistoryDialog
    },
    data() {
        return{
            headers:[
                { text: "Id", value: "id"},
                { text: "Status", value:"situation"},
                { text: "Etapa", value:"stage"},
                { text: "Último Comando", value:"command"},
                { text: "Ações", value:"actions"}
            ],
            item:[
                { 
                    icon:"mdi-information-outline",
                    name: "Histórico",
                    handler: this.openDialog
                },
                { 
                    icon:"mdi-trash-can-outline",
                    name: "Remover",
                    handler: this.disableMission
                },
                { 
                    icon:"mdi-database-remove",
                    name: "Deletar Permanentemente",
                    handler: this.deleteMission
                },
            ],
            missions: [],
            missionId: undefined,
            dialog: false,
            loading: true,
            singleExpand: true
        }
    },
    async created() {
        await this.getMissions();
    },

    computed: {
        
    },

    methods: {
        openDialog(mission) {
            this.missionId = mission.id;
            this.dialog = true;
        },
        async getMissions() {
            
            this.loading = true;
            try {
                const response = await missionService.getMissions();
                this.missions = response.data;
            }catch (error) {
                this.missions = [];
            }
            finally {
                this.loading = false;
            }
        },

        async disableMission({id}) {
            
            this.loading = true;
            this.missions = [];
            try {
                const response = await missionService.disableMission(id);
                await this.getMissions();
            }catch (error) {
            }
            finally {
                this.loading = false;
            }
        },

        async deleteMission({id}) {
            
            this.loading = true;
            this.missions = [];
            try {
                const response = await missionService.deleteMission(id);
                await this.getMissions();
            }catch (error) {
            }
            finally {
                this.loading = false;
            }
        }
    },
}
</script>