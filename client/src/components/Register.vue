<template>
  <v-container>
  <v-layout column>
    <v-flex xs6 >
      <div class='white elevation-2'>
        <v-toolbar flat dense class="gray darken-5" card>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-5 pt-2 pr-5 pb-2">
          <v-form
            name="tab-tracker-form"
            autocomplete="off">
              <v-text-field
                type="email"
                name="email"
                label="e-mail address"
                v-model="email"
              ></v-text-field>
              <v-text-field
                type="password"
                name="password"
                label="Password"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
            </v-form>
          <br>
          <div class="error" v-html="error" />
          <v-btn
            @click="register">
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password

        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
