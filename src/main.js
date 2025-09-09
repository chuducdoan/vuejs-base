import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import BaseElement from './components/BaseElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AddResource from './components/resource/AddResource.vue';
import DetailResource from './components/resource/DetailResource.vue';
import StoredResource from './components/resource/StoredResource.vue';
import NotFound from './components/UI/NotFound.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/resource' },
    {
      name: 'resource',
      path: '/resource',
      component: StoredResource,
      children: [
        {
          name: 'resource-detail',
          path: ':id',
          component: DetailResource,
        },
      ],
    },
    {
      path: '/add-resource',
      component: AddResource,
    },

    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);
app.component('base-element', BaseElement);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.use(router);
app.mount('#app');
