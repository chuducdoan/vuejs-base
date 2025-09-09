<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="removeResource(id)"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
        <br />
        <router-link :to="resourceLink">View detail</router-link>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ['removeResource'],
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
  computed: {
    resourceLink() {
      return {
        name: 'resource-detail',
        params: { id: this.id },
        query: { title: this.title },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
</style>
