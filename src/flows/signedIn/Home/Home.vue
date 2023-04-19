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

    if (!token) {
      this.$router.push('/');
    } else {
      this.user = store.getters.getUser;
    }

    console.log(this.user);
  }
}
</script>

