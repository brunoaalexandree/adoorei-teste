<template>
  <div class="container">
    <img src="../../../assets/logo.svg" alt="Logotipo Locaweb">
    <div class="login-box">
      <h1>Entre na sua conta</h1>
      <p>Para acessar sua conta informe seu-email e senha</p>
      <Input placeholder="Seu e-mail" type="text" label="E-mail" :vModel="username" @inputChanged="onUserNameChanged" />
      <Input placeholder="Sua senha" type="password" label="Senha" :vModel="password" @inputChanged="onPasswordChanged" />
      <span> Esqueci minha senha</span>
      <Button text="FAZER LOGIN" @click="handleLogin()" />
    </div>
    <p>Ainda não tem conta? <router-link to="/select-plan"><span>Cadastre-se</span></router-link></p>
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';

import Login from '@/services/login/LoginService';
import parseJwt from '@/utils/parseJWT';

const { login, getUser } = new Login

export default {
  name: 'SignInView',
  components: {
    Input,
    Button
  },
  data() {
    return {
      logo: '../../../assets/logo.svg',
      username: "",
      password: "",
    }
  },
  methods: {
    onUserNameChanged(value) {
      this.username = value;
    },
    onPasswordChanged(value) {
      this.password = value;
    },
    async handleLogin() {
      try {
        const req = await login({
          username: this.username,
          password: this.password
        });

        if (req.token) {
          this.$store.commit('setToken', req.token);

        }

        const user = parseJwt(req.token);
        const userData = await getUser(user.sub);

        if (userData) {
          this.$store.commit('setUser', userData);
        }

        this.$router.push('/home');
      } catch (err) {
        this.username = "";
        this.password = "";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
