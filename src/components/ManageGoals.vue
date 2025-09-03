<template>
  <h2>Manage goal</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>

  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid!</h2>
      <p>Please</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    // ...
    setGoal() {
      const enteredGoal = this.$refs.goal.value;
      if (enteredGoal === '') {
        this.inputIsInvalid = true;
      }
      console.log(this.inputIsInvalid);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
