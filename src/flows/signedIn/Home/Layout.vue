<template>
  <Header :userName="user.name.firstname" />
  <div class="home-container">
    <h1>Olá {{ user.name.firstname }},</h1>
    <p>Seja bem vindo a sua conta de hospedagem.</p>
    <iframe height="600" src="https://www.youtube.com/embed/VRbpOUDtlxY" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
    <p>Caso tenha alguma dúvida, <u>visite nossa central de ajuda.</u></p>
  </div>
</template>

<script>
import Header from '@/flows/signedIn/components/Header/Header.vue';

export default {
  name: 'HomeLayout',
  components: {
    Header,
  },
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>@import './styles.scss';</style>
