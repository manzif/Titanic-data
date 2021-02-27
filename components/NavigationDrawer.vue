<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item class="px-2">
        <v-avatar size="45">
          <img src="~/static/images/defaultProfile.png" alt="Pic" />
        </v-avatar>
        <v-list-item-title>{{authUser.firstname}}</v-list-item-title>

        <v-btn @click.stop="mini = !mini" icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      urlImage: 'https://client-api.transax.rw/uploads/',
      itemss: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ],
      mini: true
    }
  },
  computed: {
    isComplete() {
      return this.$store.getters['users/isComplete']
    },
    authUser() {
      return this.$store.getters['users/loggedInUser']
    },
    userProfile() {
      return this.$store.getters['users/userProfile']
    }
  }
}
</script>
