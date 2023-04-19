<template>
  <div class="container-plan-box">
    <span v-show="service.bestSeller">MAIS USADO</span>
    <div class="top-plan-box">
      <h1>{{ service.title }}</h1>
      <div class="price">
        <div class="price-box">
          <p v-show="service.price">R$</p>
          <p v-show="service.price">{{ service.price }}</p>
          <p v-show="service.price">/mês</p>
          <p v-show="!service.price">Grátis</p>
        </div>
        <div class="info">
          <p v-if="service.price">cobrado mensalmente</p>
          <p v-else>você não paga nada para usar</p>
          <p>sem taxa de setup</p>
        </div>
      </div>
      <div class="divider" />
      <h2>{{ service.recommended }}</h2>
      <div class="divider" />
    </div>
    <router-link to="/sign-up">
      <Button text="ESCOLHER ESSE PLANO" @click="selectPlan()" />
    </router-link>
    <div v-for="(planService, index) in service.planServices" :key="index" class="services-plan-box">
      <h3>{{ planService.title }}</h3>
      <ul v-show="planService.bulletPoints">
        <li v-for="(bulletPoint, index) in planService.bulletPoints" :key="index"><img
            src="../../../../assets/check-icon.svg" alt=""> {{ bulletPoint.service }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from '../../../../components/Button/Button.vue';

export default {
  name: 'PlanBox',
  components: {
    Button
  },
  props: {
    service: Object,
  },
  methods: {
    selectPlan() {
      const store = this.$store;

      if (this.service) {
        store.commit('selectPlan', this.service)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
