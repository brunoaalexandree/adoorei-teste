<template>
  <div class="select-plan-container">
    <Header />
    <p>Escolha o seu plano</p>

    <div class="plan-box-container">
      <PlanBox v-for="(service, index) in services" :key="index" :service="service" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import PlanBox from '../components/PlanBox/PlanBox.vue';

export default {
  name: 'SelectPlanLayout',
  components: {
    Header,
    PlanBox
  },
  props: {
    services: Array,
  },
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
