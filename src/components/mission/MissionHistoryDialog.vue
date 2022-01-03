<template>
    <v-dialog
        v-model="dialog"
        content-class="mission-dialog"
        persistent
        max-width="600px">
        <v-card>
            <v-toolbar
                color="amber darken-4"
                dark>
                <v-toolbar-title 
                    class="d-flex mx-auto">
                    Histórico
                </v-toolbar-title>
            </v-toolbar> 
            <v-card-text>
                <data-table
                    :headers="headers"
                    :items="mapHistory"
                    :item-key="'id'"
                    :loading="loading"
                    class="elevation-1"
                    hide-default-footer>
                    <template v-slot:default="history">
                        <data-table-dropdown 
                            :item="history"
                            :list-item="item" />
                    </template>
                </data-table>
                <worker-options-dialog />
                <options-dialog />
            </v-card-text>
            <v-card-actions class="mission-dialog-footer">
                <v-spacer />
                <v-btn
                    color="red"
                    text
                    @click="closeDialog">
                    Fechar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import DataTable from '@/components/utils/DataTable';
import DataTableDropDown from '@/components/utils/DataTableDropDown';
import  MissionHistoryService  from '@/services/MissionHistoryService';

const missionHistoryService = new MissionHistoryService();
export default {
    components: {
        "data-table" : DataTable,
        "data-table-dropdown": DataTableDropDown,
    },
    props: {
        dialog: {
            default: false
        },
        missionId: {
            required: true
        }
    },
    data() {
        return{
            headers:[
                { text: "Id", value: "id"},
                { text: "Origem", value:"origin"},
                { text: "Status", value:"situation"},
                { text: "Comando", value:"command"},
                { text: "tripulante", value:"memberId"},
            ],
            members: { 
                '1': 'Axel',
                '2': 'Megan',
                '3': 'Jordan',
                '4': 'Asheley',
                '5': 'Operador'
            },
            histories: [],
            loading: true,
            singleExpand: true
        }
    },
    async created() {
        await this.getHistory();
    },

    computed: {
        mapHistory() {
            
            this.histories.forEach(item => {
                item.memberId = this.members[item.memberId.toString()]
            });

            return this.histories;
        }
    },

    methods: {
        closeDialog() {
            this.$emit('closeDialog');
            this.$refs.form.reset();
        },

        async getHistory() {
            
            this.loading = true;
            try {
                const response = await missionHistoryService.getHistoryByMissionId(this.missionId);
                this.histories = response.data;
            }catch (error) {
                this.histories = [];
            }
            finally {
                this.loading = false;
            }
        }
    },
}
</script>