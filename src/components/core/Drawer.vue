<template>
    <v-navigation-drawer
        v-model="drawer"
        color="amber darken-4"
        :permanent="permanent"
        dark
        app>
        <v-list
            dense>
            <v-list-item 
                two-line 
                :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                    <!-- <img src="~@/assets/avatar.png"> -->
                </v-list-item-avatar>
            </v-list-item>

            <v-divider />

            <v-list-item
                v-for="item in items"
                :key="item.title"
                link 
                @click="$router.replace({path: item.route}, () => {})">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

import RouteMixin from '../../mixins/commons/RouteMixin';

export default {
    mixins: [RouteMixin],
    data () {
        return {
            drawer: "",
            items: [
                { title: 'Missões', icon: 'mdi-content-paste', route:'/missoes'},
                { title: 'Onibus Espacial', icon: 'mdi-package-variant-closed', route:'/onibus'},
                { title: 'Torre de Controle', icon: 'mdi-clipboard-edit-outline', route:'/torre'},
            ],
            color:'primary',
            colors: [
                'primary',
                'blue',
                'success',
                'red',
                'teal',
            ],
            right: false,
            permanent: true,
            miniVariant: false,
            expandOnHover: false,
            background: true,
        }
    },
    async created() {
        
    },

    methods: {
        openSidebar() {
            this.drawer = true
        },
    },
    computed: {
        bg () {
            return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
        },
    },

    async mounted() {
       
    }
}
</script>

<style lang="scss">
    @import "@/assets/styles/variables.scss";

    .item-list {
        color: red
    }
</style>