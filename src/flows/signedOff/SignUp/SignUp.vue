<template>
  <Layout :selected-plan="selectedPlan" />
</template>

<script>
import Layout from './Layout.vue';

export default {
  name: 'SignUp',
  components: {
    Layout
  },
  data() {
    return {
      selectedPlan: {},
    }
  },
  created() {
    const store = this.$store;
    this.selectedPlan = store.getters.getSelectedPlan;

    if (this.selectedPlan.title === undefined) {
      this.$router.push('/select-plan');
    }
  },
}
</script>
