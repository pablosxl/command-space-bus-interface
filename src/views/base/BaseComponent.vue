<template>
    <div id="main">
        <core-drawer ref="sidebar" />
        <app-bar :disabled="true" />
        <v-content>
            <v-slide-x-reverse-transition mode="out-in">
                <router-view />
            </v-slide-x-reverse-transition>
        </v-content>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import AppBar from  '../../components/core/AppBar'
import Drawer from '../../components/core/Drawer'

export default {
    components: {
        "app-bar": AppBar,
        "core-drawer": Drawer
    },
    async created() {
    },
    
    computed: {
       
    },
    methods: {
        showSidebar() {
            this.$refs.sidebar.openSidebar();
        }
    }
}
</script>

<style lang="scss">
#main {
    height: 100%;

    #wrapper {
        width: 100%;
        height: 100%;
        min-height: calc(100% - 80px);
        padding: 108px 28px 28px 116px;

    }

    @media screen and (max-width: 480px) {
        #wrapper {
            padding: 108px 28px 28px 28px;
        }
    }
}
</style>
