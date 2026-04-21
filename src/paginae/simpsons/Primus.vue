<script lang="ts" setup>
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import { Button } from '@/components/ui/button';


</script>


<template>
  
<div class="bg-[#ffde00] min-h-screen text-center p-4 flex flex-col items-center justify-center">
	
    <LogoSimpsons estilus="w-[24rem]" />
    
    <h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
	<div className="mt-8 flex gap-5">
		<Button size="elongatis" variant="tertiarius">
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button size="elongatis" variant="tertiarius">
      		<RouterLink to="">Enter</RouterLink>
    	</Button>
	</div>

    <div class="flex gap-12">
        <img src="/imagines/simpsons/bart.png" alt="" class="object-contain hidden md:block" width="200px">
        <img src="/imagines/simpsons/homer.png" alt="" class="object-contain hidden md:block mt-20" width="195px">
        <img src="/imagines/simpsons/moe-s.png" alt="" lass="object-contain mt-12 md:mt-0" width="240px">

    </div>


</div>

</template>