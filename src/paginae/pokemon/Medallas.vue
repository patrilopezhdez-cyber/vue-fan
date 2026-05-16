<script setup lang="ts">
import { listaMedalla } from './medallas.ts';

</script>
<template>
    <section class="pagina">

  <div class="caja-nav w-full h-[100px] bg-blue-500 flex justify-center items-center">
    <div class="w-full max-w-[1300px] flex justify-between items-center">
      <img class="caja-logo" src="/imagines/pokemon/Pokemon_logo_S.png" alt="Logo Pokémon">
      <div class="flex gap-2">
        <Button class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors">
          <RouterLink to="/pokemon/Pokedex">POKEDEX</RouterLink>
        </Button>
        <Button class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors">
          <RouterLink to="/pokemon/About">ABOUT</RouterLink>
        </Button>
        <Button class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-yellow-400 py-2 px-4 border-3 border-yellow-500 rounded-sm text-blue-900 hover:bg-yellow-500 transition-colors">
          <RouterLink to="/Pokemon">EXIT</RouterLink>
        </Button>
      </div>
    </div>
  </div>

  <div class="w-full max-w-[1400px] mx-auto p-10 font-pixel mt-10">
    
    
    <div class="bg-white border-3 border-gray-800 rounded-sm p-10 mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] text-left">
      <h1 class="font-btnpixel text-2xl lg:text-3xl text-black mb-4 uppercase">
        Región de Kanto: El Origen
      </h1>
      <p class="text-lg lg:text-xl">
        Situada al este del mundo Pokémon, Kanto es la región geográfica donde 
        comenzaron los auténticos orígenes de Pokémon. Fue el escenario que vio nacer la primera 
        generación de entrenadores, inspirada en paisajes reales de la región japonesa de Kantō. Es una zona 
        industrializada pero perfectamente conectada con la naturaleza, caracterizada por sus rutas lineales, 
        pueblos icónicos como Pueblo Paleta o Ciudad Verde, y sus extensos laboratorios de investigación biológica.
        <br>
        Su relevancia histórica es absoluta: aquí se sentaron las bases del ecosistema competitivo, la tecnología de las 
        Poké Balls y el funcionamiento de la red de Centros Pokémon que hoy conocemos en todo el planeta.
      </p>
    </div>

    
    <div class="text-center mt-10 mb-8">
      <h2 class="font-btnpixel text-lg lg:text-[28px] uppercase  text-white">
        Liga Pokémon de Kanto
      </h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
  <div 
    v-for="medalla in listaMedalla" 
    :key="medalla.id"
    class="border-3 rounded border-gray-800 bg-white rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] flex flex-col items-center text-center pb-6 hover:bg-yellow-400"
  >
    
    <h3 class="m-5 mt-8 mb-4 font-btnpixel text-[16px] text-gray-900">
      {{ medalla.nombre }}
    </h3>

    <div class="w-full p-5 bg-blue-50 border-black flex items-center border-t-1 border-b-1 justify-center mb-5">
      <img 
        :src="medalla.imagen"
        :alt="medalla.nombre" 
        class="w-30 h-30 object-contain"
      >
    </div>
    
    <p class="text-xl text-gray-700 font-pixel">
      Líder: {{ medalla.lider }}
    </p>
    

    <!---Esto miré como se hacía porque no sabía como hacer el camabio de color de la caja, creo que no lo habíamos hecho.-->
    <span 
      :class="['mt-3 text-[14px] px-3 py-0.5 font-pixel text-white border-2 border-gray-800 rounded mt-1 uppercase shadow-sm', medalla.colorBg]"
    >
      Tipo: {{ medalla.tipo }}
    </span>

  </div>

</div>
  </div>

</section>

</template>

<style scoped>

.font-btnpixel {
  font-family: "Press Start 2P", system-ui;
}
.font-pixel {
  font-family: "Pixelify Sans", sans-serif;
}
.caja-logo {
  width: 160px;
  height: auto;
}
.caja-logo img {
  width: 100px;
  object-fit: contain;
}
.caja-nav {
  width: 100%;
  background-image: url('/imagines/pokemon/Pokemon_nav.png');
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
}
.pagina {
  width: 100%;
  background-image: url('/imagines/pokemon/Pokemon_Fondo_Oak.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
}

</style>