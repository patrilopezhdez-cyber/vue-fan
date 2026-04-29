<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { characters, type Character } from './data';
import { ref } from 'vue';

const listaSimpsons = ref<Character[]>(characters.slice(0, 6))
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-[1400px] my-8 text-center">
        <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl mb-5">Simpsons Quote App</h1>
        <p class="mb-5">Click on the quote of your favourite Character</p>
    
    
</div>

    <div class="grid grid-col-2 md:grid-cols-3 gap-8 mx-auto ">
        <Card 
        class="cursor-pointer w-[220px] h-[240px] hover:bg-[#ee3133] hover:text-white transition-colors"
        v-for="character in listaSimpsons"
        >
            <CardContent class="flex flex-col items-center gap-1 w-full px-0">
            <img 
            class="w-48 h-42 object-cover object-top mt-2 bg-[#ffde00] rounded-t-md border border-black"
            :src="`/imagines/simpsons/${character.imago }`" alt="">
            <h2 class="font-medium text-lg">{{ character.nomen }}</h2>
            </CardContent>
        </Card>
    </div>


</div>    
</template>

<style scoped>

</style>