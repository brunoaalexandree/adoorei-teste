<template>
  <div class="select-plan-container">
    <img src="../../../assets/logo.svg" alt="Logo Locaweb" />
    <h1>
      Você está muito próximo de mudar a forma de <br />
      <span>hospedar seu site</span>
    </h1>
    <p>Escolha o seu plano</p>

    <div class="plan-box-container">
      <PlanBox v-for="(service, index) in services" :key="index" :service="service" />
    </div>
  </div>
</template>

<script>
import PlanBox from '../components/PlanBox/PlanBox.vue';

export default {
  name: 'SelectPlanLayout',
  components: {
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
