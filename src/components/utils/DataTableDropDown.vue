<template>
    <div class="d-flex justify-end my-2">
        <v-menu
            left
            class="ml-auto"
            origin="top right"
            transition="scale-transition"
            :attach="attachTo">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on" 
                    icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(obj, index) in filterItemList"
                    :key="index"
                    class="list-item"
                    @click.native="obj.handler(item)">
                    <v-icon
                        class="mr-3">
                        {{ obj.icon }}
                    </v-icon> 
                    {{ obj.name }}
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    props: {
        attachTo: {
            type: String,
            required: false,
            default: ""
        },
        /**
         * Estrutura do list item:
         * Array<obj>, onde obj:
         *  {
         *      icon: str,
         *      name: str,
         *      handler: function
         *  }
         * 
         */
        listItem: {
            type: Array,
            required: true
        },
        item: {
            type: Object,
            required: true
        },
        filter:{
            type: Function,
            required: false,
            default: () => false
        },
        filterCondition:{
            type: Function,
            required: false,
            default: () => false
        }
    },
    computed:{
        filterItemList(){ 
            if(this.filterCondition && this.filterCondition(this.item))
                return this.listItem.filter(this.filter)

            return this.listItem
        }
    }
}
</script>

<style lang="scss">
.list-item {
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
}
</style>