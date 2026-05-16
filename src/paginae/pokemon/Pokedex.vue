<script setup lang="ts">
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Pokemon } from './pokemonData';

const colores = {
  Planta: '#22c55e',
  Fuego: '#ef4444',
  Agua: '#3b82f6',
  Bicho: '#84cc16',
  Normal: '#a8a29e',
  Veneno: '#a855f7',
  Volador: '#6366f1'
}

</script>

<template>

<section class="pagina">

  <div class="caja-nav w-full h-[100px] bg-blue-500 flex justify-center items-center">
    <div class="w-full max-w-[1300px] flex justify-between items-center">
      <img class="caja-logo" src="/imagines/pokemon/Pokemon_logo_S.png" alt="Logo Pokémon">
      <div class="flex gap-2">
        <Button class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-400 py-2 px-4 border-3 border-blue-600 rounded-sm text-white hover:bg-blue-500 hover:border-blue-700 transition-colors">
          <RouterLink to="/pokemon/Medallas">KANTO</RouterLink>
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

  <div class=" text-white flex flex-col items-center justify-center gap-5 w-full mt-15 max-w-[1400px] my-8 mx-auto text-center">
    <div>
      <h1 class="font-btnpixel text-xl lg:text-4xl mb-5">REGISTRO POKÉDEX</h1>
      <p class="font-pixel text-lg lg:text-xl">Analiza los datos, tipos y características de los 20 pokémons originarios de la región de Kanto.</p>
    </div>
  </div>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-[1400px] mx-auto">
    
    
    <Card 
      v-for="pokemon in Pokemon"
      :key="pokemon.id"
      class="border-3 border-gray-800 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-yellow-400"
    >
        <CardContent class="flex flex-col w-full p-0">
            
            <div class="p-4 flex justify-between items-center border-b-1 border-gray-800">
                <h2 class="font-btnpixel text-s uppercase">
                    {{ pokemon.nombre }}
                </h2>
                <span class="font-btnpixel text-[10px] text-gray-500">
                    #0{{ pokemon.id}}
                </span>
            </div>

            <div class="p-5 flex justify-center items-center bg-gray-100">
                <img 
                    class="w-50 h-50 object-contain" 
                    :src="pokemon.imagen" 
                    :alt="pokemon.nombre"
                >
            </div>

            <div class="p-4 border-t-1 border-gray-800 flex flex-col gap-3">
                
                <div class="flex gap-1">
                    <span 
                        v-for="tipo in pokemon.tipos" 
                        :key="tipo"
                        class="px-3 pt-1 text-[10px] font-btnpixel border-2 border-gray-800 rounded-sm text-white bg-blue-500 uppercase"
                        :style="{ backgroundColor: colores[tipo] }">
                        {{ tipo }}
                    </span>
                </div>

                <p class="font-pixel text-[16px] text-gray-900">
                    {{ pokemon.caracteristica }}
                </p>

                <!-- Peso -->
                <div class="text-[15px] font-pixel text-gray-600">
                    Peso: {{ pokemon.peso }}
                </div>

            </div>

        </CardContent>
    </Card>

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