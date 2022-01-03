export default {
    methods: {
        routeTo(routeParams){
           this.$router.push(routeParams).catch(err => err)
        }
    }
}