<template>
    <div class="container-fluid">
    <div class="container">
       
        
                
    <div class="row border border-dark py-3 my-3">
        <div class="col-4 d-flex align-items-center justify-content-center">
            <div>
            <p class='w-100' v-if="infos.status=='Ended'" id="topbarend" > {{ infos.status }}</p>
            <p class='w-100' v-else id="topbar" > {{ infos.status }}</p>
            
            <img :src="infos.image.medium">
            </div>
            
        </div>
        <div class="col-8 text-center">
            <h4>{{ infos.name }}</h4>
            <p> Première diffusion : {{infos.premiered}}</p>
            
                <p >
                    <span v-for="(genre, index ) in infos.genres" :key="index"> {{ genre }} </span>
                </p>
            
            <p> Langue : {{ infos.language }}</p>
            <p v-if="infos.network!=null"> Chaîne d'origine : {{ infos.network.name }}</p>
            <p v-if="infos.network!=null"> Nationalité : {{ infos.network.country.name }} </p>
            <p> Résumé : <br/>
            <span v-html="infos.summary"></span>
            </p>
            </div>
        </div>  
        <div class="container ">
            <div class=" ">
            <p> Avec : </p>
            <div class="row d-flex align-items-center justify-content-center">
                
                <div 
                v-for="(star, index) in infos._embedded.cast"
                    :key="index"
                    class="box col-3"
                >   
                
                    
                       <div class="imgBox">
                            <router-link :to="{ name: 'Carrer', params: {id: star.person.id }}" >
                                
                            <img class="img-fluid" :src="star.person.image.medium">
                            </router-link>
                        </div>
                        <div class="content row">
                            <h2 class="text-center w-100"><span v-if="star.person.gender=='Male'" >Mr. </span>
                            <span v-else>Mrs. </span>
                            {{ star.person.name }}</h2>
                            <p class="text-center w-100"> est </p><br/>
                            <h2 class="text-center w-100">" {{ star.character.name }} "</h2>
                        </div>
                   
                         
                </div>
                </div>
            </div>
            <div class="row d-flex align-items-center justify-content-center">
                <section>
                <p class="w-100">Crédit :</p>
                
                <div v-for="(team ,index) in crew._embedded.crew"
                 :key="index"
                 class="card"
                 >
                    <div class="box1">
                            <div class="imgBx">
                                
                                <img class="img-fluid" :src="getImgUrl(team.type)" >
                            </div>
                            <div class="contentBx">
                                <div>
                                    <h2> <u>{{ team.type }}</u></h2>  
                                <h2> <span v-if="team.person.gender=='Male'" >Mr. </span>
                                <span v-else>Mrs. </span>{{ team.person.name }}</h2>
                                <p v-if="team.person.birthday!=null">Birthday :   {{ team.person.birthday }}</p>
                                <p v-if="team.person.country!=null">Nationalité:   {{ team.person.country.name }}</p>
                                </div>
                            </div>
                    </div>
                </div>
                </section>
            </div>
            
        </div>
        </div>  
   
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Show',
    components: {
    
  },
  data: function(){
    return {
      infos: [],
      crew: [],
    }
  },
    mounted: function(){
        
            axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'?embed=cast')
            .then(response => (this.infos= response.data))
            axios
            .get('http://api.tvmaze.com/shows/'+this.$route.params.id+'?embed=crew')
            .then(response => (this.crew= response.data))
    },
    methods: {
        getImgUrl: function(pic) {
        return 'https://source.unsplash.com/320x320/?'+pic;
        }
    
    }
    
}
</script>

<style scoped>
#topbarend {
   float: top;
    width: 100%;
    height: 20px;
    background: red;
}
#topbar {
    float: top;
    width: 100%;
    height: 20px;
    background: lime;
}
*{
    
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
}
.body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    background: #010615;
}
section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 1100px;
}
section .card 
{
    position: relative;
    width: 320px;
    height: 320px;
    margin: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;
}
section .card .box1
{
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s ease;
}
section .card:hover .box1
{
    transform: rotateY(180deg);
}
section .card .box1 .Imgbx
{
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
}
section .card .box1 .Imgbx h2
{
    position:absolute;
    top:150px;
    left:center;
    color:#fff;
    font-size: 20px;
    letter-spacing:1px;
}
section .card .box1 .Imgbx img
{
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
section .card .box1 .contentBx
{
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background :#333;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
}
section .card .box1 .contentBx div
{
    transform-style: preserve-3d;
    padding:20px;
    background: linear-gradient(45deg,#fe0061,#ffeb3b);
    transform : translateZ(100px);
}
section .card .box1 .contentBx div h2
{
    color:#fff;
    font-size: 20px;
    letter-spacing:1px;

}
section .card .box1 .contentBx div p
{
    color:#fff;
    font-size: 20px;
    letter-spacing:1px;
    
}
.box {
    position: relative;
    width : 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 40px;
    background: #060c21;
    transition: 0.5s;
}
.box:hover{
    height:400px;
}
.box .Imgbox {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}
.box .imgBox img{
    max-width: 100%;
    opacity:0.1;
    transition: 0.5s;
}
.box:hover .imgBox img{
    opacity:1;
}
.box:before{
    content:'';
    position:absolute;
    top:-2px;
    left:-2px;
    right:-2px;
    bottom:-2px;
    background: #fff;
    z-index:-1;
    
}
.box:after{
    content:'';
    position:absolute;
    top:-2px;
    left:-2px;
    right:-2px;
    bottom:-2px;
    background: #fff;
    z-index:-2;
    filter: blur(40px);
    
}
.box:before,
.box:after {
    background : linear-gradient(235deg,#89ff00,#010615,#00bcd4)
}
.box:nth-child(2n):before,
.box:nth-child(2):after {
    background : linear-gradient(235deg,#ff005e,#010615,#fbff00)
}
.box:nth-child(3n):before,
.box:nth-child(3n):after {
    background : linear-gradient(235deg,#772aff,#010615,#2196f3)
}
.box .content {
    position: absolute;
    bottom:0;
    left: 10px;
    right : 10px;
    bottom: 10px;
    height : 90px;
    background : rgba(0,0,0,0.4);
    display: flex;
    justify-content :center;
    align-items: center;
    text-align: center;
    opacity:0;
    transition: 0.5s;

}
.box:hover .content {
    opacity: 1 ;
    transition: 0.5s;
}
.box .content h2{
    font-size:20px;
    color:#fff;
    font-weight:500;
    line-height:20px;
    letter-spacing: 1px;
}
.box .content h2 span{
    font-size:14px;
    color:#fff;
    font-weight:200;
    letter-spacing: 2px;
}
.box .content p{
    font-size:10px;
    color:#fbff00;
    font-weight:200;
    letter-spacing: 2px;
}
</style>