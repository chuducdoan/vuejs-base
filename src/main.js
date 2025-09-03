import { createApp } from 'vue';

import App from './App.vue';
import ActiveElement from './components/ActiveElement.vue';
import BaseElement from './components/BaseElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App);

app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);
app.component('base-element', BaseElement);

app.mount('#app');
