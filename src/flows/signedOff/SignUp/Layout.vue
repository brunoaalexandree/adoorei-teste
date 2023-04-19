<template>
  <Header />
  <div class="sign-up-container">
    <div class="form-sign-up-content">
      <h1>Dados pessoais</h1>
      <p>Informe seus dados pessoais para acesso à sua conta</p>
      <form method="POST">
        <Input label="Nome completo" type="text" placeholder="Informe seu nome completo"
          style="height: 60px; margin-bottom: 15px" />
        <Input label="Celular" type="number" placeholder="(99) 99999-0000" style="height: 60px; margin-bottom: 15px" />
        <Input label="E-mail" type="email" placeholder="Informe seu e-mail" style="height: 60px; margin-bottom: 15px" />
        <Input label="Senha" type="password" placeholder="" style="height: 60px; margin-bottom: 15px" />
        <span style="font-size: 0.875rem; margin-top: -10px; margin-bottom: 15px; display: block;">No mínimo 8
          caracteres</span>
        <Input label="Confirme sua senha" type="password" placeholder="" style="height: 60px;" />

        <Divider />

        <h1 style="margin-bottom: 15px;">Dados do seu site</h1>
        <Input label="Nome do seu site" type="text" placeholder="Meu site" style="height: 60px; margin-bottom: 15px" />
        <span style="font-size: 0.875rem; margin-top: -10px; margin-bottom: 15px; display: block;">Exatamente igual o
          título do seu site</span>

        <Divider />

        <div class="terms">
          <input type="checkbox" v-model="checked"  />
          <p>
            Ao concluir com seu cadastro você concorda com nossos <u>termos de
              uso</u> e <u>politicas de privacidade</u>.
          </p>
        </div>

        <Button text="CRIAR CONTA" :disabled="!checked" />
      </form>
    </div>
    <div class="selected-plan-content">
      <PlanBox :service="selectedPlan" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import PlanBox from '../components/PlanBox/PlanBox.vue'
import Input from '@/components/Input/Input.vue';
import Divider from '@/components/Divider/Divider.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'SignUpLayout',
  date() {
    return {
      checked: false
    }
  },
  components: {
    Header,
    PlanBox,
    Input,
    Divider,
    Button
  },
  props: {
    selectedPlan: Object,
  },
  mounted() {
    console.log(this.selectedPlan)
  },
  methods: {
    handleCheckTerms() {
      this.checked = !this.checked;
      console.log(this.checked);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
