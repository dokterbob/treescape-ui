import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'LandingPage',
        component: () => import('src/pages/steps/01-LandingPage.vue'),
      },
      {
        path: 'user-input',
        name: 'UserInput',
        component: () => import('src/pages/steps/02-UserInput.vue'),
      },
      {
        path: 'api-integration',
        name: 'ApiIntegration',
        component: () => import('src/pages/steps/03-ApiIntegration.vue'),
      },
      {
        path: 'ai-assistance',
        name: 'AiAssistance',
        component: () => import('src/pages/steps/04-AiAssistance.vue'),
      },
      {
        path: 'interactive-design',
        name: 'InteractiveDesign',
        component: () => import('src/pages/steps/05-InteractiveDesign.vue'),
      },
      {
        path: 'evaluation',
        name: 'PerformanceEvaluation',
        component: () => import('src/pages/steps/06-PerformanceEvaluation.vue'),
      },
      {
        path: 'export',
        name: 'ResultExport',
        component: () => import('src/pages/steps/07-ResultExport.vue'),
      },
    ],
  },
];

export default routes;
