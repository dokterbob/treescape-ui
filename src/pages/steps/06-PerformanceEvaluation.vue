<template>
  <q-page padding class="design-evaluation">
    <h2>Design Evaluation and Recommendations</h2>
    <p>Review the ecological and economic performance of your design:</p>

    <!-- Use q-card-container to contain the q-card components -->
    <div class="q-pa-md q-gutter-md">
      <q-card>
        <q-card-section>
          <h4>Ecological Indicators</h4>
          <!-- Display the ecological indicators in a table -->
          <table
            class="q-table q-table--responsive q-table--horizontal-separator"
          >
            <thead>
              <tr>
                <th>Category</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Biodiversity</td>
                <td>90 species per acre</td>
              </tr>
              <tr>
                <td>Soil Health</td>
                <td>85% organic matter content</td>
              </tr>
              <tr>
                <td>Water Management</td>
                <td>80% infiltration rate increase</td>
              </tr>
              <tr>
                <td>Carbon Sequestration</td>
                <td>75 tons of CO2 equivalent sequestered</td>
              </tr>
            </tbody>
          </table>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section>
          <h4>Economic Indicators</h4>
          <!-- Display the economic indicators in a table -->
          <table
            class="q-table q-table--responsive q-table--horizontal-separator"
          >
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Initial Investment</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td>Annual Costs</td>
                <td>$5,000</td>
              </tr>
              <tr>
                <td>Annual Income</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>ROI (Return on Investment)</td>
                <td>5% per year</td>
              </tr>
              <tr>
                <td>Break-Even Point</td>
                <td>10 years</td>
              </tr>
            </tbody>
          </table>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section>
          <h4>Optimization Recommendations</h4>
          <p>
            Click the button below to request optimization recommendations for
            your design:
          </p>
          <q-btn
            label="Get Recommendations"
            color="primary"
            @click="requestRecommendations"
          />
        </q-card-section>
      </q-card>

      <q-card v-if="showRecommendations">
        <q-card-section>
          <h4>Optimization Recommendations</h4>
          <p>
            Here are some potential improvements or optimizations for your
            design:
          </p>
          <ul>
            <li v-for="(recommendation, index) in recommendations" :key="index">
              {{ recommendation }}
            </li>
          </ul>
          <p>
            For further learning and assistance with implementation, check out
            these resources:
          </p>
          <ul>
            <li><a href="#">Resource 1</a></li>
            <li><a href="#">Resource 2</a></li>
            <li><a href="#">Resource 3</a></li>
            <li><a href="#">Local Organization 1</a></li>
            <li><a href="#">Local Organization 2</a></li>
          </ul>
        </q-card-section>
      </q-card>
    </div>

    <div class="navigation-buttons">
      <q-btn
        label="Previous"
        color="primary"
        outline
        :to="{ name: 'InteractiveDesign' }"
      />
      <q-btn label="Next" color="primary" :to="{ name: 'ResultExport' }" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DesignEvaluation',
  setup() {
    const showRecommendations = ref(false);
    const recommendations = ref<string[]>([]);

    const requestRecommendations = () => {
      recommendations.value = [
        'Plant more diverse crops to increase biodiversity',
        'Consider adding more fruit trees for additional income',
        'Implement a rotational grazing system to improve soil health',
      ];
      showRecommendations.value = true;
    };

    return {
      showRecommendations,
      recommendations,
      requestRecommendations,
    };
  },
});
</script>

<style lang="scss" scoped>
.design-evaluation {
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
}
</style>
