<template>
  <div class="home">
    <Accueil msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Accueil from '@/components/Accueil.vue'; // @ is an alias to /src

@Component({
  components: {
    Accueil,
  },
})
export default class Home extends Vue {}
</script>
