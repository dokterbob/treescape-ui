<template>
  <q-page padding class="user-input">
    <h2>User Input</h2>
    <p>Provide your location, economic goals, and other preferences:</p>

    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <!-- Map-based input for location and land boundaries. -->
      <iframe
        class="map-mock"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-8.616988062858583%2C41.89641156007242%2C-8.61334025859833%2C41.9015423880521&amp;layer=mapnik&amp;marker=41.89897702559218%2C-8.615164160728455"
        style="border: 1px solid black"
      />

      <!-- Form field(s) for economic goals -->
      <q-select
        outlined
        v-model="economicGoals"
        label="Economic Goals"
        :options="economicGoalOptions"
        multiple
      />

      <!-- Form field(s) for existing vegetation -->
      <q-select
        outlined
        v-model="existingVegetation"
        label="Existing Vegetation"
        :options="vegetationOptions"
        multiple
      />

      <!-- Form field(s) for desired species -->
      <q-select
        outlined
        v-model="desiredSpecies"
        label="Desired Species"
        :options="speciesOptions"
        multiple
      />

      <!-- Form field(s) for desired goals -->
      <q-select
        outlined
        v-model="desiredGoals"
        label="Desired Goals"
        :options="goalOptions"
        multiple
      />

      <div class="buttons">
        <q-btn label="Next" color="primary" type="submit" />
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'UserInput',
  setup() {
    const router = useRouter();
    const economicGoals = ref([]);
    const existingVegetation = ref([]);
    const desiredSpecies = ref([]);
    const desiredGoals = ref([]);

    const economicGoalOptions = [
      'Maximize yield',
      'Maximize biodiversity',
      'Balance yield and biodiversity',
    ];
    const vegetationOptions = ['Grass', 'Shrubs', 'Trees', 'Mixed'];
    const speciesOptions = [
      'Fruit trees',
      'Nut trees',
      'Berry bushes',
      'Herbs',
      'Perennials',
    ];
    const goalOptions = ['Food production', 'Ecosystem services', 'Recreation'];

    function handleSubmit() {
      // Process the form input here
      // Then navigate to the next step
      router.push({ name: 'ApiIntegration' });
    }

    return {
      economicGoals,
      existingVegetation,
      desiredSpecies,
      desiredGoals,
      economicGoalOptions,
      vegetationOptions,
      speciesOptions,
      goalOptions,
      handleSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.map-mock {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0; // A light gray color as a placeholder
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px; // Add some space below the map mock component
}

.user-input {
  max-width: 600px;
  margin: 0 auto;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
</style>
