<template>
    <div class="container">
       
      <div class="row ">
        <div v-for="(acteur, index) in acteurs"
        v-bind:key="index"
        class="col-3 text-center border border-dark py-3"
        >             
            <h4>{{ acteur.person.name }}</h4>
            <p>{{acteur.person.birthday}}</p>
            <router-link :to="{ name: 'Carrer', params: {id: acteur.person.id}}" >
            <button class="btn btn-success my-3" >Carrière</button>
            </router-link>
            <img :src="acteur.person.image.medium">
        </div>
                                          
      </div>
      
  </div>
       
          
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Casting',
    components: {
    
  },
  data: function(){
    return {
      acteurs: []
    }
  },
    mounted: function(){
        
            axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'/cast')
            .then(response => (this.acteurs= response.data))
    }
}
</script>

<style scoped>

</style>