<template>
  <div>
    <!-- <Tutorial /> -->
    {{ test }}

    <Container>
      <form @submit.prevent="login">
        <Input v-model="email" type="email" />
        <Input v-model="password" type="password" />
        <Input type="submit" value="login" />
      </form>
    </Container>
    <button @click="login">test</button>

    {{ email }}
    {{ password }}

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
      userid: this.$store.state.user.auth?.id,
    }
  },
  methods: {
    async login() {
      const { error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      })
      if (error) {
        console.log(error)
      }
    },
  },
}
</script>
