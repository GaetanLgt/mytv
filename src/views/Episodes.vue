<template>
    <div id="container">
                <div class="section" v-for="(episode, index) in episodes"
                :key ="index">
           

                
                <div                 
                class="content3"               
                >
                
                
                    <div class="text">
                        
                            <h1>{{ episode.name }}</h1>
                            <p v-html="episode.summary"></p>
                       
                    </div>
                    <img :src="episode.image.original">
                </div>   
                 
            
            </div>
      
        </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
    name: 'Episodes',
    components: {
    
  },
  data: function(){
    return {
      episodes: [],
      saisons: [],
    }
  },
    mounted: function(){
        
            axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'/episodes')
            .then(response => (this.episodes= response.data))
            axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'/seasons')
            .then(response => (this.saisons= response.data))
    }
}
$(document).ready(function() {

    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        var dh = $(document).height();
        var wh = $(window).height();
        var value =(scroll / (dh-wh)) *100;
        $('#container').css('left' , - value * 3 +'%');
    })
})
</script>

<style scoped>

#container
{
    /*position: fixed;*/
    top:0;
    left:0;
    width:400%;
    height: 100vh;
    display : flex;
}
#container .section
{
    position: relative;
    width : 100%;
    height:100%;
    padding: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
#container .section .content3
{
    display: flex;
    justify-content: center;
    align-items: center;
}
#container .section .content3 .text
{
    padding-right: 50px;

}
#container .section .content3 .text h1
{
    padding-right: 50px;
    margin: 0 ; 
    padding:0;
    font-size: 4em;

}
#container .section .content3 .text p
{
    font-size: 1.1em;

}
#container .section .content3 img
{
    max-width: 400px;
}
</style>