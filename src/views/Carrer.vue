<template>
    <div class="container">
       
                    
                <section 
                >
           

                
                <div                 
                class="slide" 
                v-for="(film, index) in films"
                v-bind:key="index"
                :style="{ backgroundImage: `url(${film._embedded.show.image.original})` }"         
                >
                
                
                
                    <div class="content">
                        
                            <h2>{{ film._embedded.show.name }}</h2>
                            
                            <p v-html="film._embedded.show.summary"></p>
                            <router-link :to="{ name: 'Show', params: {id: film._embedded.show.id}}" >
                            <button class="btn btn-success my-3">Voir plus</button>
                            </router-link>
                    </div>
                </div>   
                 
            
            </section>
                        
                        
                        
                        
               
                
            </div>
       
          
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Carrer',
    components: {
    
  },
  data: function(){
    return {
      films: []
    }
  },
    mounted: function(){
        
            axios
            .get('http://api.tvmaze.com/people/'+this.$route.params.id+'/castcredits?embed=show')
            .then(response => (this.films= response.data))
    },
    methods: {
      
    }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
section 
{
    position: absolute;
    width:100%;
    height:100vh;
    display:flex;
    border: 2px solid #000;
}
section .slide {
    position : relative;
    background: #0f0;
    height: 100%;
    flex: 1 ;
    border-right: 2px solid #000;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    background-position : center;
    background-size: cover ;

}
section .slide:last-child {
    border-right: none;
}
section .slide:hover {
    flex-grow:5;
}
section .slide .content {
    position: absolute;
    bottom: 0;
    margin : 40px;
    padding: 30px;
    color: #fff;
    background :#000;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    transform : translateY(100px);
}
section .slide:hover .content {
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
    transition-delay: 0.5s;
    transform : translateY(0);
}

</style>