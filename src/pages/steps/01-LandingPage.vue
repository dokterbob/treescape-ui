<template>
  <q-page padding class="landing">
    <div class="header">
      <img src="~assets/logo.svg" alt="TreeScape Logo" class="logo" />
      <h1>Design Your Own Sustainable Forest with TreeScape</h1>
      <h2>
        Combining agroforestry, local biodiversity, and cutting-edge AI
        assistance to help you create thriving ecosystems.
      </h2>
    </div>
    <div class="steps">
      <div class="step" v-for="(step, index) in steps" :key="index">
        <q-icon :name="step.icon" class="step-icon" />
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </div>
    </div>
    <div class="cta">
      <q-btn
        label="Start Designing Your Forest Now!"
        color="primary"
        :to="{ name: 'UserInput' }"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage',
  setup() {
    const steps = [
      {
        icon: 'assignment',
        title: 'User Input',
        description:
          'Provide information about your land and desired outcomes.',
      },
      {
        icon: 'api',
        title: 'API Integration',
        description: 'Access data from public APIs for accurate site analysis.',
      },
      {
        icon: 'auto_awesome',
        title: 'AI Assistance',
        description:
          'Receive expert guidance from our AI model to refine your design.',
      },
      {
        icon: 'brush',
        title: 'Interactive Design',
        description:
          'Visually design your forest and make adjustments in real-time.',
      },
    ];

    return {
      steps,
    };
  },
});
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  max-width: 150px;
  margin-bottom: 1rem;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 200px;
}

.step-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta {
  text-align: center;
}
</style>
