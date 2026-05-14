<script setup lang="ts">

</script>

<template>

<div class="pagina bg-[#ffde00] min-h-screen text-center flex flex-col items-center justify-center">

    <img 
    class="object-contain w-[400px] md:w-[600px] lg:w-[700px]"
    src="/imagines/pokemon/Pokemon_homepage.png" alt="Logo Pokémon">

    
	<div className="mt-5 flex gap-5">
		<Button
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-blue-800 py-2 px-4 border-3 border-blue-900 rounded-sm text-yellow-400 hover:bg-blue-900 transition-colors"
		>
      		<RouterLink to="/">EXIT</RouterLink>
    	</Button>
    	<Button 
		class="font-btnpixel shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] text-xs bg-yellow-400 py-2 px-4 border-3 border-yellow-500 rounded-sm text-blue-900 hover:bg-yellow-500 transition-colors"
		>
      		<RouterLink to="/pokemon/About">ENTER</RouterLink>
    	</Button>
	</div>

	<div class=" mt-5 mb-5 w-full text-center px-4">
    <p class="font-pixel text-xs md:text-s text-white ">
        © 2026 Pokémon. TM, ® Nintendo. Academic project / Non-commercial.
    </p>
</div>

</div>
    
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Press+Start+2P&display=swap');

.font-btnpixel {
   font-family: "Press Start 2P", system-ui;
}

.font-pixel {
  font-family: "Pixelify Sans", sans-serif;
}

.pagina {
  width: 100%;
  background-image: url('/imagines/pokemon/Pokemon_fondo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
}


</style>