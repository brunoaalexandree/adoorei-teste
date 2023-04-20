<template>
  <Header />
  <div class="sign-up-container">
    <div class="selected-plan-mobile">
      <PlanBox :service="selectedPlan" :mobile="true" />
    </div>

    <div class="form-sign-up-content">
      <h1>Dados pessoais</h1>
      <p>Informe seus dados pessoais para acesso à sua conta</p>
      <div v-show="validateFormMsg" class="info-pass">
        <p>{{ validateFormMsg }}</p>
      </div>
      <Input label="Nome completo" type="text" placeholder="Informe seu nome completo"
        style="height: 60px; margin-bottom: 15px" @inputChanged="onFullNameChanged" />
      <Input label="Celular" type="text" placeholder="(99) 99999-0000" style="height: 60px; margin-bottom: 15px"
        @inputChanged="onTelChanged" />
      <Input label="E-mail" type="email" placeholder="Informe seu e-mail" style="height: 60px; margin-bottom: 15px"
        @inputChanged="onEmailChanged" />
      <Input label="Senha" type="password" placeholder="" style="height: 60px; margin-bottom: 15px"
        @inputChanged="onPasswordChanged" />
      <span style="font-size: 0.875rem; margin-top: -10px; margin-bottom: 15px; display: block;">No mínimo 8
        caracteres</span>
      <Input label="Confirme sua senha" type="password" placeholder="" style="height: 60px;"
        @inputChanged="onPasswordConfirmChanged" />

      <Divider />

      <h1 style="margin-bottom: 15px;">Dados do seu site</h1>
      <Input label="Nome do seu site" type="text" placeholder="Meu site" style="height: 60px; margin-bottom: 15px"
        @inputChanged="onSiteDetailsChanged" />
      <span style="font-size: 0.875rem; margin-top: -10px; margin-bottom: 15px; display: block;">Exatamente igual o
        título do seu site</span>

      <Divider />

      <div class="terms">
        <input type="checkbox" v-model="checked" />
        <p>
          Ao concluir com seu cadastro você concorda com nossos <u>termos de
            uso</u> e <u>politicas de privacidade</u>.
        </p>
      </div>

      <Button text="CRIAR CONTA" :disabled="!checked" @click="handleRegister()" />
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

import Register from '@/services/register/RegisterService';

const { register } = new Register;

export default {
  name: 'SignUpLayout',
  data() {
    return {
      checked: false,
      fullName: null,
      tel: null,
      email: null,
      password: null,
      passwordConfirm: null,
      siteDetails: null,
      validateFormMsg: null,
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
  methods: {
    onFullNameChanged(value) {
      this.fullName = value;
    },
    onTelChanged(value) {
      this.tel = value;
    },
    onEmailChanged(value) {
      this.email = value;
    },
    onPasswordChanged(value) {
      this.password = value;
    },
    onPasswordConfirmChanged(value) {
      this.passwordConfirm = value;
    },
    onSiteDetailsChanged(value) {
      this.siteDetails = value;
    },
    handleCheckTerms() {
      this.checked = !this.checked;
    },
    async handleRegister() {
      if (this.password.length < 8) {
        this.validateFormMsg = 'A senha precisa ter pelo menos 8 caracteres.';
      } else if (this.password !== this.passwordConfirm) {
        this.validateFormMsg = 'As duas senhas tem que ser iguais.';
      } else if (this.fullName === null || this.tel === null || this.email === null) {
        this.validateFormMsg = 'Preencha todos os campos!';
      } else {
        this.validateFormMsg = null;

        const name = this.fullName.split(' ');

        const userData = {
          email: this.email,
          username: name.join(''),
          password: this.password,
          name: {
            firstname: name[0],
            lastname: name[1]
          },
          address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: 3,
            zipcode: '12926-3874',
            geolocation: {
              lat: '-37.3159',
              long: '81.1496'
            }
          },
          phone: this.tel
        }
        try {
          const res = await register(userData);
          this.$store.commit('setUser', userData);
          this.$router.push('/home');
        } catch (err) {
          return;
        }


      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
