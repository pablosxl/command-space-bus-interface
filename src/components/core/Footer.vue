<template >
  <v-footer id="core-footer"  height="50">
    <div
      class="footer-items"
      style="font-size: 12px; color: #fff; text-align: center"
    > 
    
    <div>Estágio Supervisionado</div>
    <div>{{version}}</div>
    </div>
    
    <v-spacer />
  </v-footer>
</template>

<script>
export default{
    data(){
        return{
           version: process.env.VUE_APP_VERSION
        }
    },
    
}
</script>

<style>
#core-footer {
  text-align: center;
  align-content: center;
  background: linear-gradient(180deg, #00132b 19%, #123954 100%);
}

#core-footer .footer-items {
  width: 100%;
}
</style>
