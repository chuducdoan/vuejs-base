<template>
  <div>
    <div v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <h1>abc</h1>
    <div>
      <h4>
        <slot :item="dataTest"></slot>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTest: 'doancd',
    };
  },
};
</script>
