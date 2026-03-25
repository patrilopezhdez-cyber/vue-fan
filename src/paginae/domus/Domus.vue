<script setup lang="ts">
import { Button } from '@/components/ui/button'

</script>


<template>

<div class="cappa">
  <h1>Home Page</h1>
  
  <Button variant="secondary" class="bg-green-500 px-12 py-8 text-3xl hover:bg-green-700" >
    Cilck me
  </Button>
</div>
  
</template>

<style scoped>
.cappa {
  margin: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 12px;
}

Button{
  padding: 0, 80px;
}
</style>