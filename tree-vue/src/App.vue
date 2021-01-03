<template>
  <section id="app" class="section">
    <Mode :mode="mode" @change-mode="changeMode" />
    <Main />
  </section>
</template>

<script>
import Main from './pages/Main.vue';

import Mode from './components/Mode.vue';

export default {
  name: 'App',

  components: {
    Main, Mode
  },

  data() {
    return {
      mode: 'view'
    }
  },

  methods: {
    changeMode(mode) {
      this.mode = mode;
    }
  }
}
</script>

<style>
#app {
  color: #333;
}
</style>
