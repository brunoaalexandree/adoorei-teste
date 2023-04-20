<template>
  <div class="container-plan-box">
    <span v-show="service.bestSeller && !service.selected">MAIS USADO</span>
    <span style="background-color: #000" v-show="service.selected">PLANO ESCOLHIDO</span>
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
      <Divider />
      <h2>{{ service.recommended }}</h2>
      <Divider />
    </div>
    <router-link to="/sign-up">
      <Button v-show="!service.selected" text="ESCOLHER ESSE PLANO" @click="selectPlan()" />
    </router-link>
    <div v-show="!mobile">
      <div v-if="service.selected === true">
        <div v-show="index < 4" v-for="(planService, index) in service.planServices" :key="index"
          class="services-plan-box">
          <h3>{{ planService.title }}</h3>
          <ul v-show="planService.bulletPoints">
            <li v-for="(bulletPoint, index) in planService.bulletPoints" :key="index"><img
                src="../../../../assets/check-icon.svg" alt=""> {{ bulletPoint.service }}</li>
          </ul>
        </div>
      </div>
      <div v-else>
        <div v-for="(planService, index) in service.planServices" :key="index" class="services-plan-box">
          <h3>{{ planService.title }}</h3>
          <ul v-show="planService.bulletPoints">
            <li v-for="(bulletPoint, index) in planService.bulletPoints" :key="index"><img
                src="../../../../assets/check-icon.svg" alt=""> {{ bulletPoint.service }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div v-show="service.selected" class="plan-box-footer">
      <Button text="TROCAR PLANO" @click="changePlan()" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import Divider from '@/components/Divider/Divider.vue';

export default {
  name: 'PlanBox',
  components: {
    Button,
    Divider
  },
  props: {
    service: Object,
    mobile: Boolean,
  },
  methods: {
    selectPlan() {
      const store = this.$store;

      if (this.service) {
        store.commit('selectPlan', { ...this.service, selected: true })
      }
    },
    async changePlan() {
      const store = this.$store;
      await store.commit('selectPlan', {})
      this.$router.push('/select-plan');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
