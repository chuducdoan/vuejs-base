<template>
  <base-card>
    <base-button
      @click="setSelectTab('stored-resource')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResource from './StoredResource.vue';

export default {
  components: {
    AddResource,
    StoredResource,
  },

  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'r1',
          title: 'The Complete Vue.js Course',
          description: 'Master Vue.js and build awesome, reactive web apps!',
          link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Master Vue.js and build awesome, reactive web apps!',
          link: 'https://www.udemy.com/course/vuejs-2-the-complete-guide',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      console.log('Adding resource...');
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resource';
    },
    removeResource(resId) {
      // this.storedResources = this.storedResources.filter(
      //   (resource) => resource.id !== resId
      // );
      // nhu nay giao dien se khong thay doi khi res bi xoa, vi voi th them ta thay doi cung tren 1 mng trong bo nho ma chung ta da cung cap ban dau
      // con xoa thi ghi de bang 1 mang hoan toan moi

      // Cach khac de giao dien cap nhat khi xoa
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
