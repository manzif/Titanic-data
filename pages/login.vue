<template>
  <v-row align="center" justify="center">
    <v-container py-3>
      <v-card color="#0087ff">
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <div class="create-center mb-1">
              <v-list-item-content class="pb-0 mb-0">
                <h2 class="mb-1 white--text">Welcome to RSA TITANIC-Data</h2>
              </v-list-item-content>
            </div>
          </v-flex>
          <v-flex xs12 sm8 md6>
            <v-card class="pa-10">
              <v-layout justify-center py-3>
                <div class="pa-3 text-center">
                  <v-icon size="50" color="primary">mdi-login</v-icon>
                </div>
              </v-layout>
              <v-container fluid>
                <v-form v-model="isFormValid" :lazy-validation="lazy">
                  <v-card-text>
                    <v-text-field
                      ref="email"
                      v-model="email"
                      :rules="emailRules"
                      name="login"
                      label="Email Address"
                      type="text"
                      outlined
                      dense
                      required
                    />
                    <v-text-field
                      id="password"
                      ref="password"
                      v-model="password"
                      :rules="passwordRules"
                      :type="showPassword ? 'text' : 'password'"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      name="Password"
                      label="Password"
                      required
                      dense
                      outlined
                    />
                  </v-card-text>
                  <v-card-actions class="px-5">
                    <v-btn
                      @click="login"
                      :loading="isLoading"
                      :disabled="!isFormValid"
                      large
                      block
                      color="primary mb-1"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'register',
  data() {
    return {
      email: '',
      isFormValid: false,
      lazy: false,
      showPassword: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [(v) => !!v || 'Password is required']
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'helper/isLoading',
      isDisabled: 'helper/isDisabled'
    })
  },
  methods: {
    async login() {
      this.$store.dispatch('helper/loading')
      this.$store.dispatch('helper/disabling')
      console.log(this.email)
      console.log(this.password)
      try {
        await this.$store.dispatch('users/login', {
          email: this.email,
          password: this.password
        })
        this.email = null
        this.password = null
        this.$store.dispatch('helper/loading')
        this.$store.dispatch('helper/disabling')
      } catch (e) {
        // TODO: remove this log
        return e
      }
    }
  }
}
</script>
<style scoped>
.disable-events {
  pointer-events: none;
}
.create-center {
  text-align: center;
}
.authentication {
  background-color: #030a0f;
}
</style>
