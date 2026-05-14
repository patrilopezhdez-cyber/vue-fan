<script setup lang="ts">
import { ref, } from 'vue';

const indice = ref(0)

const frases=[
   "¡Hola! Bienvenido al mundo de los Pokémon.",
    "Mi nombre es Oak. ¿Estás listo para esta aventura?",
    "En esta web conocerás los orígenes en la región de Kanto.",
    "Explora la Pokedex para ver los 20 primeros especímenes.",
    "¡Haz clic en los botones de arriba para empezar!"
]

function sigFrase(){
    if(indice.value<frases.length-1){
        indice.value++
    }else{
        indice.value=0
    }
}


</script>

<template>
<div class=" caja-nav w-full h-[100px] bg-blue-500 flex justify-center items-center ">
    <div class="w-full max-w-[1300px] flex justify-between items-center">
        <img 
        class="caja-logo"
        src="/imagines/pokemon/Pokemon_logo_S.png" alt="Logo Pokémon">
        <div class="flex gap-2">
        <Button 
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors"
		>
      		<RouterLink to="/pokemon/Pokedex">POKEDEX</RouterLink>
    	</Button>

        <Button 
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors"
		>
      		<RouterLink to="/pokemon/Medallas">KANTO</RouterLink>
    	</Button>

        <Button 
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors"
		>
      		<RouterLink to="/pokemon/About">ABOUT</RouterLink>
    	</Button>

        <Button 
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-yellow-400 py-2 px-4 border-3 border-yellow-500 rounded-sm text-blue-900 hover:bg-yellow-500 transition-colors"
		>
      		<RouterLink to="/Pokemon">EXIT</RouterLink>
    	</Button>
        </div>
    </div>
</div>

  <main class="pagina h-[calc(100vh-100px)] w-full flex flex-col items-center bg-gray-200 relative">
    
    
    <div class="flex-grow w-full flex items-end justify-center z-10">
      <div class="w-130 h-[96%]">
        <img src="/imagines/pokemon/Profesor_Oak-near.png" alt="Profesor Oak">
      </div>
    </div>

    <div
    @click="sigFrase"
    class="w-[90%] h-[150px] md:h-[250px] max-w-2xl border-3 border-gray-800 bg-white px-6 py-4 mb-15 z-20 relative cursor-pointer">
        <div 
      class="absolute -top-12 left-0 p-2 px-6 border-3 border-gray-800 font-btnpixel text-[12px] text-gray-800 bg-white">
        PROF. OAK
    </div>

      <p class="font-pixel text-xl">
        {{ frases[indice] }}
      </p>
      
      <button 
      class="absolute bottom-4 right-5 font-btnpixel text-[10px] text-gray-600">
        SIGUIENTE
      </button>
    </div>

  </main>


</template>

<style scoped>

.font-btnpixel {
   font-family: "Press Start 2P", system-ui;
}

.font-pixel {
  font-family: "Pixelify Sans", sans-serif;
}

.caja-logo{
width: 160px;
height: auto;
}
.caja-logo img{
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