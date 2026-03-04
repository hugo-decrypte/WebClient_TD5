<template>
  <div class="cagnotte">
    <h1>Cagnotte</h1>
    <button @click="goToNew">Créer une nouvelle cagnotte</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToNew() {
  router.push({ name: 'new-cagnotte' })
}
</script>
