<template>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>Welcom to</span>
        <span class="font-weight-light ml-2">MEVN boilerplate</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-bind:to="'/'">
          <span class="mr-2">Top</span>
        </v-btn>
        <v-btn v-bind:to="'/login'"
          v-if="!$store.state.isUserLoggedIn"
        >
          <span class="mr-2">Sin-in</span>
        </v-btn>
        <v-btn v-bind:to="'/register'"
          v-if="!$store.state.isUserLoggedIn"
        >
        <span class="mr-2">Register</span>
        </v-btn>
        <v-btn @click="logout"
          v-if="$store.state.isUserLoggedIn"
        >
        <span class="mr-2">Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>

<style>
</style>
