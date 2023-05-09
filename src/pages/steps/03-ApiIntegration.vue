<template>
  <q-page padding class="api-integration">
    <h2>API Integration</h2>
    <p>
      Gathering data from open APIs and datasets to inform your forest design:
    </p>
    <div class="api-list">
      <div class="api-item" v-for="(api, index) in apis" :key="index">
        <h3>{{ api.name }}</h3>
        <p>{{ api.description }}</p>
        <q-linear-progress
          :value="api.progress"
          buffer
          color="primary"
          :style="{ width: '100%' }"
        />
      </div>
    </div>
    <div class="navigation-buttons">
      <q-btn
        label="Previous"
        color="primary"
        outline
        :to="{ name: 'UserInput' }"
      />
      <q-btn label="Next" color="primary" :to="{ name: 'AiAssistance' }" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ApiIntegration',
  setup() {
    const apis = ref([
      {
        name: 'Climate Data API',
        description:
          'Fetching climate data for the selected location to inform species selection and planting strategies.',
        progress: 0,
      },
      {
        name: 'Soil Data API',
        description:
          'Retrieving soil information for the selected location to determine appropriate species and planting techniques.',
        progress: 0,
      },
      // Add more APIs and datasets as needed
    ]);

    function fetchData(apiIndex: number) {
      if (apis.value[apiIndex].progress < 100) {
        apis.value[apiIndex].progress += 10;
        setTimeout(() => fetchData(apiIndex), 500);
      }
    }

    onMounted(() => {
      apis.value.forEach((_api, index) => {
        fetchData(index);
      });
    });

    return { apis };
  },
});
</script>

<style lang="scss" scoped>
.api-integration {
  .api-list {
    .api-item {
      margin-bottom: 1rem;
    }
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
}
</style>
