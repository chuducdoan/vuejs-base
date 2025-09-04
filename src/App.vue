<template>
  <!-- <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base
      :topics="topics"
      @select-topic="activateTopic"
    ></knowledge-base>

    <base-element #default="slotProps">
      <p>body</p>
      <p>{{ slotProps.item }}</p>
    </base-element>

    <button @click="setSelectedComponent('active-goals')">Active goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage goals</button>

    <div style="border: 1px solid black; margin: 1rem auto; padding: 1rem">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div> -->
  <the-header title="Learning Vue"></the-header>
  <the-resource></the-resource>
</template>

<script>
// import ActiveGoals from './components/ActiveGoals.vue';
// import ManageGoals from './components/ManageGoals.vue';

// export default {
//   components: {
//     ActiveGoals,
//     ManageGoals,
//   },
//   data() {
//     return {
//       topics: [
//         {
//           id: 'basics',
//           title: 'The Basics',
//           description: 'Core Vue basics you have to know',
//           fullText:
//             'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
//         },
//         {
//           id: 'components',
//           title: 'Components',
//           description:
//             'Components are a core concept for building Vue UIs and apps',
//           fullText:
//             'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
//         },
//       ],
//       activeTopic: null,
//       selectedComponent: 'active-goals',
//     };
//   },
//   provide() {
//     return {
//       topics: this.topics,
//       selectTopic: this.activateTopic,
//     };
//   },
//   methods: {
//     activateTopic(topicId) {
//       this.activeTopic = this.topics.find((topic) => topic.id === topicId);
//     },
//     setSelectedComponent(cmp) {
//       this.selectedComponent = cmp;
//     },
//   },
// };

import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/resource/TheResource.vue';

export default {
  components: {
    TheHeader,
    TheResource,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
/* section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
} */

/* ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
} */

/* li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} */

/* h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
} */
</style>
