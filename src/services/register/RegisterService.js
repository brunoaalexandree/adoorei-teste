import api from "@/http/api";

export default class Register {
  async register(userData) {
    const { data } = await api.post('/users', userData);

    return data;
  };
}
