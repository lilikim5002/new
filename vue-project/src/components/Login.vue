<template>
  <div class="login-container">
    <h1>Вход</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null,
    }
  },
  methods: {
    handleSubmit() {
      axios
        .post('https://49b284831d0959ce.mokky.dev', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          console.log('Вход успешен:', response.data)
        })
        .catch(error => {
          console.error('Ошибка входа:', error)
          this.errorMessage = error.response.data.message
          ;('Ошибка входа')
        })
    },
  },
}
</script>
