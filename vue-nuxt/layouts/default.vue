<template>
  <div>
    <Nuxt-link to="/" class="logo" />

    <nav v-if="isLoggedIn">
      <div class="primary-color">zoeken</div>
      <Nuxt-link to="/leden-panel">leden panel</Nuxt-link>

      <div class="avatar">
        <AsyncImage
          :promise="getProfile"
          alt="user profile"
          class="avatar-img"
        />
      </div>
    </nav>
    <nav v-else>
      <Nuxt-link to="/lid-worden" class="bold secondary-color">
        lid worden
      </Nuxt-link>
      <div class="primary-color" @click="toggleLogin">log in</div>
    </nav>

    <Popup :visible="loginVisible" @close="toggleLogin">
      <h1>Login</h1>

      <form @submit.prevent="login">
        <Input v-model="email" type="email" />
        <Input v-model="password" type="password" />
        <Input type="submit" value="Login" />
        <div class="link light-color" @click="resetPassword">
          wachtwoord vergeten
        </div>
        <div v-if="error">{{ error }}</div>
      </form>
    </Popup>

    <div class="wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginVisible: false,
      email: '',
      password: '',
      error: '',
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn']
    },
  },
  mounted() {
    this.$store.commit('user/init', this.$supabase)

    this.$supabase.auth.onAuthStateChange((_, session) => {
      this.$store.commit('user/set', session?.user)
    })
  },
  methods: {
    async getProfile() {
      const { data, error } = await this.$supabase.storage
        .from('profiles')
        .download(`${this.$store.getters['user/id']}.jpg`)

      if (error) return './assets/dummyfoto.jpg'

      return URL.createObjectURL(data)
    },
    toggleLogin() {
      this.loginVisible = !this.loginVisible
    },
    async login() {
      const { error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      })

      if (error) this.error = error.message
      else {
        this.error = ''
        this.loginVisible = false
      }
    },
    resetPassword() {
      const { error } = this.$supabase.auth.api.resetPasswordForEmail(
        this.email
      )
      this.error = error?.message || `Email verstuurd naar ${this.email}`
      // TODO: send notification
    },
  },
}
</script>

<style>
.logo {
  position: fixed;
  top: 1em;
  left: 1em;
  height: 2.5em;
  width: 17em;
  background: url(~/assets/proteuslogo.png);
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 100;
}

.wrapper {
  padding-top: 4.5em;
}

nav {
  position: fixed;
  right: 1em;
  top: 1em;
  border: 1px solid var(--light);
  border-radius: 0.75em;
  padding: 0.25em;
  display: flex;
  font-size: 1em;
  z-index: 100;
  background: white;
}

nav > * {
  cursor: pointer;
  margin: 0.5em;
  user-select: none;
}

/* AVATAR */
.avatar {
  width: 2em;
  height: 2em;
  overflow: hidden;
  border-radius: 50%;
  margin: 0em !important;
}

.avatar-img {
  --height: 2em;
  --width: 2em;
}

@media screen and (max-width: 600px) {
  .logo {
    background: url(~/assets/proteuslogo-mobile.png);
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
