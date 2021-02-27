/* eslint-disable no-console */
// import Cookie from 'js.cookie'

export const state = () => ({
  loggedInUser: '',
})

export const mutations = {
  SET_USER(state, user) {
    state.loggedInUser = user
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await this.$auth.loginWith('local', {
        data: {
          strategy: 'local',
          email,
          password
        }
      })

      if (response.data.message === 'You have been successfully logged in') {
        const data = response.data
        await this.$auth.setUserToken(data.token)
        await this.$auth.setUser(data.user)
        await this.$auth.$storage.setLocalStorage('user', data.user)
        await this.$auth.$storage.setCookie('user', data.user)
        await this.$router.push('/')
      }
    } catch (error) {
      if (error.response) {
        commit('GET_ERROR_MESSAGE', error.response.data.message)
      }
    }
  },
  async logout({ commit }) {
    await this.$auth.logout('local')
    await this.$auth.$storage.setLocalStorage('user', '')
    await this.$auth.$storage.setCookie('user', '')
    await this.$router.push('/login')
  },
  async initAuth({ commit }, req) {
    if (req) {
      if (req.headers.cookie) {
        const authUser = this.$auth.$storage.getCookie('user')
        commit('SET_USER', authUser)
      }
    } else {
      const authUser = this.$auth.$storage.getLocalStorage('user')
      if (authUser) {
        await this.$auth.setUser(authUser)
        commit('SET_USER', authUser)
      }
    }
  }
}

export const getters = {
  loggedInUser(state) {
    return state.loggedInUser
  },
}
