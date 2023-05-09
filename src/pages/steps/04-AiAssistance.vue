<template>
  <q-page padding class="ai-assistance">
    <h2>AI Assistance</h2>
    <p>
      Our AI is generating suggestions and guidance based on your input and
      data:
    </p>
    <div class="conversation">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <q-chat-message
          v-if="message.type === 'ai'"
          :text="message.content"
          name="AI"
          sent="true"
          avatar="/path/to/avatar"
        ></q-chat-message>
        <div v-if="message.options" class="user-options">
          <q-btn
            v-for="(option, optionIndex) in message.options"
            :key="optionIndex"
            :label="option.label"
            color="secondary"
            text-color="white"
            class="q-mr-xs q-mb-xs"
            @click="handleOptionClick(option.value)"
          />
        </div>
      </div>
    </div>
    <div class="summary" v-if="showSummary">
      <!-- Add summary card content here -->
    </div>
    <div class="navigation-buttons">
      <q-btn
        label="Previous"
        color="primary"
        outline
        :to="{ name: 'ApiIntegration' }"
      />
      <q-btn
        label="Next"
        color="primary"
        :to="{ name: 'InteractiveDesign' }"
        :disabled="!showSummary"
      />
    </div>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

type MessageOption = {
  label: string;
  value: string;
};

type Message = {
  type: 'ai' | 'user';
  content: string;
  options?: MessageOption[];
};

type UserInput = {
  economicGoal: string;
  existingVegetation: string;
  desiredSpecies: string[];
  desiredGoals: string[];
  soilData: string;
  climateData: string;
};

export default defineComponent({
  name: 'AiAssistance',
  setup() {
    const messages = ref<Message[]>([]);
    const showSummary = ref<boolean>(false);

    function handleOptionClick(value: string) {
      if (value === 'correct') {
        showSummary.value = true;
      } else {
        // Implement changes handling
      }
    }

    async function fetchConversation(userInput: UserInput) {
      // Mock API call
      const mockApiCall = new Promise<{ data: Message[] }>((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              {
                type: 'ai',
                content: `Based on your input, it looks like you are interested in creating a forest for ${
                  userInput.economicGoal
                }, with a focus on ${userInput.desiredSpecies.join(
                  ', '
                )}. You also want to provide ${userInput.desiredGoals.join(
                  ' and '
                )}. The location has a ${userInput.soilData} soil type and a ${
                  userInput.climateData
                } climate. Does this information accurately reflect your goals and the site conditions?`,
                options: [
                  { label: 'Yes, that is correct.', value: 'correct' },
                  {
                    label: 'No, I would like to make some changes.',
                    value: 'changes',
                  },
                ],
              },
            ],
          });
        }, 1000);
      });

      const response = await mockApiCall;
      messages.value = response.data;
    }

    onMounted(() => {
      const userInput: UserInput = {
        economicGoal: 'Timber Production',
        existingVegetation: 'Mixed Forest',
        desiredSpecies: ['Oak', 'Pine', 'Maple'],
        desiredGoals: ['Wildlife Habitat', 'Carbon Sequestration'],
        soilData: 'Sandy Loam',
        climateData: 'Temperate',
      };

      fetchConversation(userInput);
    });

    return {
      messages,
    };
  },
});
</script>

<style lang="scss" scoped>
.ai-assistance {
  .conversation {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .llm-message,
  .user-options {
    margin-bottom: 0.5rem;
  }

  .llm-message {
    text-align: left;
  }

  .user-options {
    text-align: right;
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
}
</style>
