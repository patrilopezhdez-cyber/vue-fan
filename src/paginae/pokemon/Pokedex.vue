<script setup lang="ts">

</script>

<template>
<div class="w-full h-[100px] bg-yellow-400 flex justify-center items-center">
    <div class="w-full max-w-[1300px] flex justify-between items-center">
        <img 
        class="caja-logo"
        src="/imagines/pokemon/Pokemon_logo.png" alt="Logo Pokémon">
    
    <Button 
		class="h-[40px] text-sm bg-blue-700 px-3 border-3 border-blue-800 rounded-sm text-white hover:bg-blue-900 transition-colors"
		>
      		<RouterLink to="/pokemon/pokemon">Home</RouterLink>
    	</Button>
    </div>
</div>
</template>

<style scoped>

.caja-logo{
width: 160px;
height: auto;
}
.caja-logo img{
width: 100px;
object-fit: contain;
}

</style>