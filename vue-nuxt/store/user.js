export const state = () => ({
  auth: null
})

export const mutations = {
  init(state, supabase) {
    state.auth = supabase.auth.user()
  },
  set(state, user) {
    state.auth = user;
  },
}

export const getters = {
  isLoggedIn: state => !!state.auth,
  id: state => state.auth ? state.auth.id : null,
  email: state => state.auth ? state.auth.email : null,
}