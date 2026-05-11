<script setup lang="ts">

</script>

<template>

<div class="pagina bg-[#ffde00] min-h-screen text-center flex flex-col items-center justify-center">

    <img 
    class="object-contain w-[500px] md:w-[700px] lg:w-[900px]"
    src="/imagines/pokemon/Pokemon_logo.png" alt="Logo Pokémon">
    
    <h1 class="text-3xl text-white my-3 font-medium">
    	<strong>¡Descubre y aprende sobre los pokémon!</strong>
	</h1>
	<div class="text-xl text-white">
    	De momento no estan todos, pero lo puedes disfrutar igual.
	</div>
	<div className="mt-10 flex gap-5">
		<Button
		class=" text-lg bg-blue-800 py-2 px-6 border-3 border-blue-900 rounded-sm text-yellow-400 hover:bg-blue-900 transition-colors"
		>
      		<RouterLink to="/">EXIT</RouterLink>
    	</Button>
    	<Button 
		class=" text-lg bg-yellow-400 py-2 px-6 border-3 border-yellow-500 rounded-sm text-blue-900 hover:bg-yellow-500 transition-colors"
		>
      		<RouterLink to="/pokemon/Pokedex">ENTER</RouterLink>
    	</Button>
	</div>


</div>
    
</template>

<style scoped>

.pagina {
  width: 100%;
  background-image: url('/imagines/pokemon/Pokemon_fondo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
}


</style>