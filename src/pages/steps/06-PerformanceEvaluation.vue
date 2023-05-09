<template>
  <q-page padding class="evaluation">
    <h2>Evaluation</h2>
    <p>Review the ecological and economic performance of your design:</p>
    <!-- Add elements to display evaluation results, such as charts or tables -->
    <q-btn label="Next" color="primary" :to="{ name: 'ResultExport' }" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PerformanceEvaluation',
  setup() {
    // Your TypeScript code goes here
  },
});
</script>

<style lang="scss" scoped>
.evaluation {
  // Your SCSS styles go here
}
</style>
