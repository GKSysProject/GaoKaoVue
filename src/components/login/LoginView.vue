<!-- 临时的Login页面，后续替换为2024.6.21美化版本 -->
<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginView',
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
        async login() {
            try {
                // const configResponse = await axios.get('/config.json')
                // const serverUrl = configResponse.data.serverUrl
                const loginUrl = `${this.$config.serverUrl}/login`
                const response = await axios.post(loginUrl, {
                    username: this.username,
                    password: this.password
                });
                localStorage.setItem('token', response.data.token);
                this.$router.push('/');
            } catch (err) {
                this.error = 'Login failed. Please check your credentials.';
            }
        }
    }
    };
  </script>
  
  <style scoped>
  .login {
    text-align: center;
    margin-top: 60px;
  }
  
  form {
    display: inline-block;
    text-align: left;
  }
  
  div {
    margin-bottom: 10px;
  }
  
  button {
    padding: 8px 16px;
  }
  </style>
  