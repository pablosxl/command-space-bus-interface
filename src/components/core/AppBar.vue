<template>
    <div id="header">       
        <v-app-bar
            app
            color="amber darken-4"
            dark>
            <v-toolbar-title>MISSÃO ESPACIAL</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

//import Drawer from './Drawer'
export default {
    components: {
    // 'core-drawer' : Drawer
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            drawer : true
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">
#header {
    border-bottom: 1px solid blue; 
    width: calc(100% - 144px);
    position: absolute;
    left: 80px;
    top: 0;
}
</style>