export const state = () => ({
  auth: null
})

export const mutations = {
  init(state, supabase) {
    state.auth = supabase.auth.user()
  },
  set(state, user) {
    if (user) {
      state.auth = user;
    }
  },
}

export const getters = {
  isLoggedIn: state => !!state.auth,
}