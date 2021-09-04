<template>
  <div>
    <Popup :visible="!!access_token" @close="goHome">
      <h1>Reset password</h1>

      <form @submit.prevent="resetPassword">
        <Input :value="store_email" type="email" disabled />
        <Input
          v-model="password"
          autocomplete="new-password"
          placeholder="new-password"
          type="password"
        />
        <Input type="submit" value="reset" />
        <div v-if="error">{{ error }}</div>
      </form>
    </Popup>

    <Container header="Hello world"> Hello user </Container>

    <Icon name="close-circle-outline" />

    <button @click="logout">log out</button>

    user: {{ userid }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test',
      email: '',
      password: '',
      error: '',
      access_token: '',
    }
  },
  computed: {
    userid() {
      return this.$store.getters['user/id'] || 'null'
    },
    store_email() {
      return this.$store.getters['user/email'] || 'null'
    },
  },
  mounted() {
    const hash = this.$route.hash
    if (hash.includes('access_token=')) {
      const queries = {}

      hash
        .substring(1)
        .split('&')
        .forEach((q) => {
          const [key, value] = q.split('=')
          queries[key] = value
        })

      console.log(this.$store)
      this.email = this.$store.getters['user/email']
      this.access_token = queries.access_token
    }
  },

  methods: {
    async resetPassword() {
      const { error } = await this.$supabase.auth.api.updateUser(
        this.access_token,
        {
          password: this.password,
        }
      )

      if (error) {
        this.error = error.message
      } else {
        this.goHome()
      }
    },
    async logout() {
      await this.$supabase.auth.signOut()
    },
    goHome() {
      this.access_token = ''
      this.$router.push('/')
    },
  },
}
</script>
