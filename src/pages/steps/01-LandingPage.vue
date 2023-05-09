<template>
  <div class="landing">
    <h1>Welcome to TreeScape</h1>
    <p>
      Design custom biodiverse agroforestry systems that balance ecological
      sustainability and economic viability.
    </p>
    <q-btn label="Get Started" color="primary" :to="{ name: 'UserInput' }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
  setup() {
    // Your TypeScript code goes here
  },
});
</script>

<style lang="scss" scoped>
.landing {
  // Your SCSS styles go here
}
</style>
