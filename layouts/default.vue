<template>
  <v-app>
    <nav>
      <v-app-bar
        :clipped-left="clipped"
        v-if="$auth.$state.loggedIn"
        fixed
        app
        light
        flat
      >
        <v-spacer />

        <nuxt-link to="/"
          ><v-img height="50px" contain src="/images/logo.svg"></v-img
        ></nuxt-link>

        <v-spacer />

        <span v-if="authUser.firstname"
          >{{ authUser.firstname }} {{ authUser.lastname }}</span
        >
        <v-badge avatar bordered overlap>
          <template v-slot:badge>
            <v-avatar>
              <span>1</span>
            </v-avatar>
          </template>

          <v-avatar size="35">
            <v-img src="/images/profile.svg"></v-img>
          </v-avatar>
        </v-badge>
        <v-menu bottom center>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon color="primary">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <UserDropdown />
        </v-menu>
      </v-app-bar>
      <NavigationDrawer />
    </nav>
    <v-content>
      <nuxt />
    </v-content>
    <VFooter />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import VFooter from '@/components/VFooter'
import NavigationDrawer from '@/components/NavigationDrawer'
import UserDropdown from '@/components/UserDropdown'

export default {
  components: {
    VFooter,
    UserDropdown,
    NavigationDrawer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      pages: [
        { name: 'Home', link: '/' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' },
        { name: 'Packages', link: '/package' }
      ],
      miniVariant: false,
      mini: true,
      right: true,

      title: null
    }
  },
  middleware: ['auth', 'check-auth'],
  computed: {
    authUser() {
      return this.$store.getters['users/loggedInUser']
    },
    userProfile() {
      return this.$store.getters['users/userProfile']
    },
    ...mapGetters({
      isMessageVisible: 'helper/isMessageVisible',
      isMessage: 'helper/isMessage'
    })
  },
  watch: {
    $route(val) {
      this.title = val.name
    },
    isMessageVisible() {
      if (this.isMessageVisible === true) {
        this.showMessage(this.isMessage)
      }
    }
  },
  created(){

  },
  methods: {
    showMessage(message) {
      this.$dialog.notify[message.type](message.content, {
        position: 'top-right',
        timeout: 5000
      })
      this.$store.dispatch('helper/initializeMessage')
    }
  }
}
</script>
<style scoped>
.alink {
  text-decoration: none;
  color: #000;
}
* {
  text-transform: none !important;
}
</style>
