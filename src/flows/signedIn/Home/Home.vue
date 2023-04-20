<template>
  <div>
    <Layout :user="user" />
  </div>
</template>

<script>
import Layout from './Layout.vue';

export default {
  name: 'HomeView',
  components: {
    Layout,
  },
  data() {
    return {
      user: null,
    }
  },
  created() {
    const store = this.$store;

    const token = store.getters.getToken;
    const user = store.getters.getUser;

    if (!token && !user) {
      this.$router.push('/');
    } else {
      this.user = store.getters.getUser;
    }
  }
}
</script>

