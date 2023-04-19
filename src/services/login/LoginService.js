import api from "@/http/api";

export default class Login {
  async login(userLogin) {
    const { data } = await api.post('/auth/login', userLogin);

    return data;
  };

  async getUsers() {
    const { data } = await api.get(`/users`);

    return data;
  }

  async getUser(userId) {
    const { data } = await api.get(`/users/${userId}`);

    return data;
  }
}
