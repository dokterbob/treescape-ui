<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleDrawer" />
        <q-toolbar-title>
          <router-link
            :to="{ name: 'LandingPage' }"
            class="text-white no-decoration"
          >
            TreeScape
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="250" :breakpoint="500">
      <q-list>
        <q-item
          v-for="item in mainMenuItems"
          :key="item.name"
          clickable
          :to="item.route"
        >
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header class="q-my-md">Steps</q-item-label>
        <q-item
          v-for="item in stepMenuItems"
          :key="item.name"
          clickable
          :to="item.route"
        >
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          &copy; {{ new Date().getFullYear() }} Mathijs de Bruin
        </q-toolbar-title>
        <q-space />
        <div class="footer-links">
          <!--           <router-link
            :to="{ name: 'Contact' }"
            class="text-white no-decoration"
            >Contact</router-link
          >
          <router-link :to="{ name: 'About' }" class="text-white no-decoration"
            >About</router-link
          >
          <router-link :to="{ name: 'Help' }" class="text-white no-decoration"
            >Help</router-link
          >
          <router-link :to="{ name: 'Terms' }" class="text-white no-decoration"
            >Terms & Conditions</router-link
          > -->
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const drawer = ref(false);

    const menuItems = ref([
      { label: 'Home', name: 'Landing', route: { name: 'LandingPage' } },
      {
        label: 'User Input',
        name: 'UserInput',
        route: { name: 'UserInput' },
        step: true,
      },
      {
        label: 'API Integration',
        name: 'ApiIntegration',
        route: { name: 'ApiIntegration' },
        step: true,
      },
      {
        label: 'AI Assistance',
        name: 'AiAssistance',
        route: { name: 'AiAssistance' },
        step: true,
      },
      {
        label: 'Interactive Design',
        name: 'InteractiveDesign',
        route: { name: 'InteractiveDesign' },
        step: true,
      },
      {
        label: 'Contact',
        name: 'Contact',
        route: { name: 'Contact' },
        footer: true,
      },
      { label: 'About', name: 'About', route: { name: 'About' }, footer: true },
      { label: 'Help', name: 'Help', route: { name: 'Help' }, footer: true },
      {
        label: 'Terms & Conditions',
        name: 'Terms',
        route: { name: 'Terms' },
        footer: true,
      },
    ]);

    function toggleDrawer() {
      drawer.value = !drawer.value;
    }

    const mainMenuItems = computed(() =>
      menuItems.value.filter((item) => !item.footer && !item.step)
    );
    const stepMenuItems = computed(() =>
      menuItems.value.filter((item) => item.step)
    );

    // ...
    return {
      drawer,
      mainMenuItems,
      stepMenuItems,
      toggleDrawer,
    };
  },
});
</script>

<style lang="scss" scoped>
.q-toolbar-title {
  font-weight: 500;
}

.no-decoration {
  text-decoration: none;
}

.footer-links {
  display: flex;
  gap: 1rem;
}
</style>
