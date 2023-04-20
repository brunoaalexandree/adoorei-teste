<template>
  <div class="header-container">
    <img src="../../../../assets/logo.svg" alt="Logo Locaweb">

    <div @click="showLogoutMenu = !showLogoutMenu" class="logout">
      <button>
        <p>{{ userName[0] }}</p>
      </button>
      <div v-if="showLogoutMenu" @click="showLogoutMenu = false" class="logout-menu">
        <button @click="logout()">
          <p>Sair</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showLogoutMenu: false,
    }
  },
  props: {
    userName: String,
  },
  methods: {
    async logout() {
      const store = this.$store;

      await store.commit('setUser', null);
      await store.commit('setToken', null);

      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
