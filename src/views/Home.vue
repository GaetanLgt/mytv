<template>
<div >
      <div class="scene">
      <div class="moon"></div>
      <img src="../../src/assets/img/forest.png" class="forest">
      <img src="../../src/assets/img/cloud1.png" class="cloud1">
      <img src="../../src/assets/img/cloud2.png" class="cloud2">
      <img src="../../src/assets/img/cloud3.png" class="cloud3">
      <img src="../../src/assets/img/cloud1.png" class="cloud4">
      <img src="../../src/assets/img/cloud2.png" class="cloud5">
      <img src="../../src/assets/img/cloud3.png" class="cloud6">
      </div>

  
    <div class="container">
      <input class="form-control" type="text" v-model="query">
    <div v-for="(result, index) in results"
    v-bind:key="index"
    >
      <div class="row border text-left border-dark py-3 my-3">
        <div class="col-3">
          <img class="img-fluid" :src=(result.show.image.medium)><br/>
        </div>
        <div class="col-9">
          <p>
            <router-link :to="{ name: 'Show', params: {id: result.show.id}}" >
            <span class="h2">{{ result.show.name }}</span>
            </router-link>
          <router-link :to="{ name: 'Casting', params: {id: result.show.id}}" >
              <button class="btn btn-success mx-3" >Casting</button>
            </router-link>
            </p>
          <p>Language : <span class="badge badge-warning">{{ result.show.language }}</span></p>
  
            <span v-for="(genre,index) in result.show.genres" :key="index" class="badge badge-info px-2 mx-2">{{ genre }}</span>
          <div class="row my-2">
            <p v-html="result.show.summary"></p>
          </div>
            <p class="py-4">
            <router-link :to="{ name: 'Episodes', params: {id: result.show.id}}" >
              <button class="btn btn-secondary mr-3" v-if="result.show.type=='Scripted'" >episodes</button>
            </router-link>
            
            </p>
          
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
window.addEventListener('load', function(){
      let count =100;
      let scene= document.querySelector(".scene") ;
      let i = 0 ;
      while( i <count){
          let star = document.createElement("i");
          let x = Math.floor(Math.random() * window.innerWidth );
          let y = Math.floor(Math.random() * window.innerHeight );
          let duration = Math.random() * 10;
          let size = Math.random() * 2;
    
          star.style.left = x+"px";
          star.style.top = y+"px";
          star.style.width = 1 + size + "px";
          star.style.height = 1 + size + "px";

          star.style.animationDuration = 7+duration+'s';
          star.style.animationDelay =   7+duration+'s';
    
          scene.appendChild(star);
          i++;
        }
    });

import axios from 'axios'

export default {
  name: 'App',
  components: {
    
  },
  data: function(){
    return {
      query: '',
      results: [],
      
    }
  },
  watch: {
    
    query: function() {
      axios
        .get('http://api.tvmaze.com/search/shows?q='+ this.query)
        .then(response => (this.results= response.data))
        
    },
    
  },
 


  
  
}


    
</script>

<style>

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
.scene {
  position:relative;
  width: 100%;
  height:100vh;
  background: linear-gradient(#111425,#3751e0);
  background-attachment: fixed;
  overflow: hidden;
}
.moon {
  position:absolute;
  top: 100px;
  left:400px;
  width: 100px;
  height:100px;
  background: #fff;
  border-radius: 50%;
  z-index: 1000;
}
.moon:after {
  position:absolute;
  content:'';
  top: -15px;
  left:15px;
  width: 100%;
  height:100%;
  background: #fff;
  border-radius: 50%;
  background: linear-gradient(#111425,#3751e0);
  background-attachment: fixed;
  z-index: 1000;
}
.forest {
  position: absolute;
  bottom:0;
  left:0;
  z-index:1000;
  transform: scale(1.2);
}
.scene i {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: animate linear infinite;

}
.scene input {
  position: absolute;
  top :50%;
  background: #fff;
  z-index:10000;
  

}
@keyframes animate
{
  0%
  {
    opacity: 0;
    transform: translateY(0);
  }
  10%,90%
  {
    opacity:1;
  }
  100%
  {
    opacity: 0;
    transform: translateY(-100px);
  }
}
.cloud1 
{
  position: absolute;
  top: 0;
  left:0;
  max-width: 600px;
  z-index: 10000;
  animation: animateCloud 50s linear infinite;
}
.cloud2
{
  position: absolute;
  top: 0;
  left:0;
  max-width: 500px;
  z-index: 10000;
  animation: animateCloud 35s linear infinite;
}
.cloud3
{
  position: absolute;
  top: 0;
  left:0;
  max-width: 600px;
  z-index: 10000;
  animation: animateCloud 80s linear infinite;
}
.cloud4
{
  position: absolute;
  top: 200px;
  left:0;
  max-width: 300px;
  z-index: 10000;
  animation: animateCloud 70s linear infinite;
  animation-delay: -20s;
}
.cloud5
{
  position: absolute;
  top: 200px;
  left:0;
  max-width: 500px;
  z-index: 10000;
  animation: animateCloud 40s linear infinite;
  animation-delay: -5s;
}
.cloud6
{
  position: absolute;
  top: 75px;
  left:0;
  max-width: 400px;
  z-index: 10000;
  animation: animateCloud 30s linear infinite;
  animation-delay: -10s;
}
@keyframes animateCloud
{
    0%
    {
      transform: translateX(-100%) scale(1);
    }
    0%
    {
      transform: translateX(400%) scale(1.5);
    }
}
</style>