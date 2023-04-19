<template>
  <div class="container">
    <img src="../../../assets/logo.svg" alt="Logotipo Locaweb">
    <div class="login-box">
      <h1>Entre na sua conta</h1>
      <p>Para acessar sua conta informe seu-email e senha</p>
      <Input placeholder="Seu e-mail" type="email" label="E-mail" />
      <Input placeholder="Sua senha" type="password" label="Senha" />
      <span> Esqueci minha senha</span>
      <Button text="FAZER LOGIN" />
    </div>
    <p>Ainda não tem conta? <router-link to="/select-plan"><span>Cadastre-se</span></router-link></p>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'SignInView',
  components: {
    Input,
    Button
  },
  data() {
    return {
      logo: '../../../assets/logo.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
