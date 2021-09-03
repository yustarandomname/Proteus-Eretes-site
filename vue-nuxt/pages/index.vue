<template>
  <div>
    <!-- <Tutorial /> -->
    {{ test }}
    <form @submit.prevent="login">
      <Input v-model="email" type="email" />
      <Input v-model="password" type="password" />
      <Input type="submit" value="login" />
    </form>
    <Container>CONTAINER</Container>
    <button @click="login">test</button>

    {{ email }}
    {{ password }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test',
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const { user, error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password,
      })
      console.log(user, error)
    },
  },
}
</script>
