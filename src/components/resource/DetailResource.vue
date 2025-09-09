<template>
  <div class="detail-resource">
    <h2>Detail Resource Component</h2>
    <!-- Add your component content here -->
    <div v-if="resource">
      <h3>{{ resource.title }}</h3>
      <p>{{ resource.description }}</p>
      <!-- Display other resource details as needed -->
    </div>
    <router-link to="/resource/google">next resource</router-link>
  </div>
</template>

<script>
export default {
  inject: ['resources'],
  data() {
    return {
      // Define your component data here
      resource: null,
    };
  },
  methods: {
    // Define your component methods here
    loadResource(route) {
      const resourceId = route.params.id;
      const selectedItem = this.resources.find(
        (item) => item.id === resourceId
      );
      this.resource = selectedItem || null;
    },
  },
  created() {
    // Accessing route parameter
    this.loadResource(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadResource(newRoute);
    },
  },
};
</script>

<style scoped>
.detail-resource {
  margin: auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
