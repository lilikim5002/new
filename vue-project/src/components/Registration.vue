<template>
  <div class="registration-container">
    <h1>Регистрация</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Зарегистрироваться</button>
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
      username: '',
      email: '',
      password: '',
      errorMessage: null,
    }
  },
  methods: {
    handleSubmit() {
      axios
        .post('https://49b284831d0959ce.mokky.dev', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(response => {
          console.log('Регистрация успешна:', response.data)

          this.$router.push('/Login')
        })
        .catch(error => {
          console.error('Ошибка регистрации:', error)
          this.errorMessage =
            error.response.data.message || 'Ошибка регистрации'
        })
    },
  },
}
</script>
